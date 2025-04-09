import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    KeycloakConnectModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        authServerUrl: config.get('KEYCLOAK_AUTH_SERVER_URL'),
        realm: config.get('KEYCLOAK_REALM'),
        clientId: config.get('KEYCLOAK_CLIENT_ID'),
        secret: config.get('KEYCLOAK_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
