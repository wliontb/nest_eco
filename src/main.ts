import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    exposedHeaders: ['Content-Disposition'],
  })

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
