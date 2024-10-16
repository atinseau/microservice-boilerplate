import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        // ConfigModule already check the port
        port: parseInt(process.env.PORT)
      }
    }
  );

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  await app.listen();
}

bootstrap();