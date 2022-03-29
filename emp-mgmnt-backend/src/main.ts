import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDocument } from './config/swagger/swagger';
import { SwaggerModule } from '@nestjs/swagger';

/**
 * Starting of function bootsrap
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(3001);
}
bootstrap();
