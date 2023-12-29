import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ allowedHeaders: '*', origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4004);
  console.log('lisetnt to port');
}
bootstrap();
