import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public, Roles } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('public')
  @Public() 
  getPublic(): string {
    return this.appService.getHello();
  }

  @Get('protected')
  @Roles({ roles: ['user'] }) 
  getProtected(): string {
    return 'This is a protected route!';
  }
}
