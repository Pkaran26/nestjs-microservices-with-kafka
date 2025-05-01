import { NestFactory } from '@nestjs/core';
import { BlogapiModule } from './blogapi.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BlogapiModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'blogapi',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'blog-group',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
