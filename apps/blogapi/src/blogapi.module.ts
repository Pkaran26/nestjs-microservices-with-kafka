import { Module } from '@nestjs/common';
import { BlogapiController } from './blogapi.controller';
import { BlogapiService } from './blogapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BlogapiController],
  providers: [BlogapiService],
})
export class BlogapiModule {}
