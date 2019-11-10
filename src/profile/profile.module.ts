import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secretOrPrivateKey: 'oncalltext0001',
      signOptions: {
        expiresIn: '365d',
      },
    }),
  ],
  providers: [ProfileResolver],
})
export class ProfileModule {}
