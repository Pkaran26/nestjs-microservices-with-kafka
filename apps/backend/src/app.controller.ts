import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('BLOG_SERVICE') private readonly blogClient: ClientKafka,
    @Inject('WEATHER_SERVICE') private readonly weatherClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.blogClient.subscribeToResponseOf('blog.request');
    this.weatherClient.subscribeToResponseOf('weather.request');
    await Promise.all([
      this.blogClient.connect(),
      this.weatherClient.connect(),
    ]);
  }

  @Get('blog')
  getBlog() {
    const xx = this.blogClient.send('blog.request', { action: 'getAll' });
    console.log(xx);
    return xx;
  }

  @Get('blog/:id')
  getBlogById(@Param('id') id: string) {
    return this.blogClient.send('blog.request', {
      action: 'getById',
      id: Number(id),
    });
  }

  @Get('weather')
  getWeather() {
    return this.weatherClient.send('weather.request', { city: 'Berlin' });
  }
}
