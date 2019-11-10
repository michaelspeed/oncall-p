import { Injectable } from '@nestjs/common';
import { JwtPayloadInterface } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  async validateUser(payload: JwtPayloadInterface): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}
