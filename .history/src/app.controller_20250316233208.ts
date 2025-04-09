import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('public')
  @Public() // No auth required
  getPublic(): string {
    return this.appService.getHello();
  }

  @Get('protected')
  @Roles({ roles: ['user'] }) // Requires authenticated user with 'user' role
  getProtected(): string {
    return 'This is a protected route!';
  }
}
