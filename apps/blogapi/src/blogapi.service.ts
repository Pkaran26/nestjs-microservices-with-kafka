import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class BlogapiService {
  constructor(private readonly httpService: HttpService) {}

  async fetchPosts() {
    const response$ = this.httpService.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const response = await lastValueFrom(response$);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  }

  async fetchPostById(id: number) {
    const response$ = this.httpService.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const response = await lastValueFrom(response$);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  }
}
