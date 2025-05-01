import { Module } from '@nestjs/common';
import { WeatherapiController } from './weatherapi.controller';
import { WeatherapiService } from './weatherapi.service';

@Module({
  imports: [],
  controllers: [WeatherapiController],
  providers: [WeatherapiService],
})
export class WeatherapiModule {}
