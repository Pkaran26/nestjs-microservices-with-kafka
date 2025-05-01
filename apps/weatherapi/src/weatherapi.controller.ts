import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class WeatherapiController {
  @MessagePattern('weather.request')
  handleWeatherCheck(@Payload() data: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    return { city: data.city, temp: 24, condition: 'Sunny' };
  }
}
