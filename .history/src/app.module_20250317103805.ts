import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { EnvUtils } from './env.utils';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    KeycloakConnectModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        authServerUrl: EnvUtils.get('KEYCLOAK_AUTH_SERVER_URL'),
        realm: EnvUtils.get('KEYCLOAK_REALM'),
        clientId: EnvUtils.get('KEYCLOAK_CLIENT_ID'),
        secret: config.get('KEYCLOAK_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    { provide: APP_GUARD, useClass: AuthGuard }, 
    { provide: APP_GUARD, useClass: ResourceGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule {}
