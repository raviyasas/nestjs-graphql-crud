import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { EnvUtils } from './env.utils';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService
  ],
})
export class AppModule {}
