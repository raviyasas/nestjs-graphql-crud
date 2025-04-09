import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvUtils } from './env.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(EnvUtils);
}
bootstrap();
