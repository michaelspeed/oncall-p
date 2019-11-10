import { Args, Context, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User, UserRoles } from '../prisma/prisma.binding';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { UserGuard } from './user.guard';
import { UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Resolver()
export class UserResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtS: JwtService,
  ) {}

  @Mutation('createNewUser')
  async createUser(
    @Args('email') email: string,
    @Args('name') name: string,
    @Args('password') password: string,
    @Info() info,
  ): Promise<{user: User, token: string}> {
    return new Promise(async (resolve, reject) => {
      const newPass = await bcrypt.hash(password, 10);
      const user = await this.prisma.mutation.createUser({
        data: {
          email,
          password: newPass,
          name,
          emailVerification: false,
          roles: 'USER',
        },
      }, info);
      const token = await this.userService.createToken(user.id);
      return {
        user,
        token,
      };
    });
  }

  @Mutation('signIn')
  async signInUser(@Args('email') email: string, @Args('password') password: string, @Info() info): Promise<{user: User, token: string, error: any}> {
    return new Promise(async (resolve, reject) => {
      const user = await this.prisma.query.user({where: {email}}, info);
      const token = await this.userService.createToken(user.id);
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return {
          user: null,
          token: null,
          error: 'Passwords do not match',
        };
      } else {
        return {
          user,
          token,
          error: null,
        };
      }
    });
  }

  @Query('currentUser')
  @UseGuards(UserGuard)
  async currentUser(@Context() context, @Info() info): Promise<User> {
    return new Promise(async (resolve, reject) => {
      const auth = context.req.headers.authorization;
      const token = auth.split(' ')[1];
      const user: any = this.jwtS.decode(token);
      this.prisma.query.user({where: {id: user.id}}, info).then(value => resolve(value)).catch(error => reject(error));
    });
  }

  @Query('normalUsers')
  async normalUsers(@Context() context, @Info() info): Promise<User[]> {
    return new Promise(async (resolve, reject) => {
      this.prisma.query.users({where: {roles: 'USER'}, orderBy: 'createdAt_DESC'}, info).then(value => resolve(value)).catch(error => reject(error));
    });
  }

  @Mutation('escalateRoles')
  async escalateRoles(@Args('id') id: string, @Args('role') role: string, @Info() info): Promise<User> {
    return new Promise(async (resolve, reject) => {
      this.prisma.mutation.updateUser({
        where: {
          id,
        },
        data: {
          roles: role as UserRoles,
        },
      }, info).then(value => resolve(value)).catch(error => reject(error));
    });
  }

  @Query('getUserByID')
  async getUserById(@Context() context, @Args('id') id: string, @Info() info): Promise<User> {
    return new Promise(async (resolve, reject) => {
      this.prisma.query.user({where: {id}}, info).then(value => resolve(value)).catch(error => reject(error));
    });
  }
}
