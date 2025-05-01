import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherapiService {
  getHello(): string {
    return 'Hello World!';
  }
}
