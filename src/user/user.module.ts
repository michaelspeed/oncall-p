import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secretOrPrivateKey: 'oncalltext0001',
      signOptions: {
        expiresIn: '365d',
      },
    }),
    PrismaModule,
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
