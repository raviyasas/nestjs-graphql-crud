import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvUtils } from './util/env.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use
  await app.listen(EnvUtils.get('PORT'));
}
bootstrap();
