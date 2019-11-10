import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { LocationModule } from './location/location.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    ProfileModule,
    LocationModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
