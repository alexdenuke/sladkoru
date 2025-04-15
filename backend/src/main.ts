import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 5000);
  console.log(
    `✅ Server is running on http://0.0.0.0:${process.env.PORT ?? 5000}`,
  );
}
bootstrap();
