import { Test, TestingModule } from '@nestjs/testing';
import { BlogapiController } from './blogapi.controller';
import { BlogapiService } from './blogapi.service';

describe('BlogapiController', () => {
  let blogapiController: BlogapiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlogapiController],
      providers: [BlogapiService],
    }).compile();

    blogapiController = app.get<BlogapiController>(BlogapiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(blogapiController.getHello()).toBe('Hello World!');
    });
  });
});
