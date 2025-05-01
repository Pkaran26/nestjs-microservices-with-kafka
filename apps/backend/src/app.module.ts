import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BLOG_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'gateway-blog',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'gateway-consumer-blog',
          },
        },
      },
      {
        name: 'WEATHER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'gateway-weather',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'gateway-consumer-weather',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
