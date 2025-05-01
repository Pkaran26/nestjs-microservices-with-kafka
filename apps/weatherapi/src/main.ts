import { NestFactory } from '@nestjs/core';
import { WeatherapiModule } from './weatherapi.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WeatherapiModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'weatherapi',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'weather-group',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
