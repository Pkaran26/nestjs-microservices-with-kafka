import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogapiService } from './blogapi.service';

@Controller()
export class BlogapiController {
  constructor(private readonly blogapiService: BlogapiService) {}

  @MessagePattern('blog.request')
  async handleBlogRequests(@Payload() payload: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { action, id } = payload;

    switch (action) {
      case 'getAll':
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.blogapiService.fetchPosts();
      case 'getById':
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.blogapiService.fetchPostById(Number(id));
      default:
        return { error: 'Invalid action' };
    }
  }
}
