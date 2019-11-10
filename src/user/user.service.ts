import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    private readonly jwtS: JwtService,
  ) {}

  async createToken(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const user = {id};
      const accessToken = this.jwtS.sign(user);
      resolve(accessToken);
    });
  }

  async decryptToke(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = this.jwtS.decode(token);
      resolve(user);
    });
  }
}
