import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvUtils } from './util/env.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new Va)
  await app.listen(EnvUtils.get('PORT'));
}
bootstrap();
