import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secretOrPrivateKey: 'oncall-main-key',
      signOptions: {
        expiresIn: '365d',
      },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
