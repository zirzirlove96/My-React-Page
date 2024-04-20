import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CommonModule } from './common/common.module';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(CommonModule);
  //nest cors
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  await app.listen(4000);
}
bootstrap();
