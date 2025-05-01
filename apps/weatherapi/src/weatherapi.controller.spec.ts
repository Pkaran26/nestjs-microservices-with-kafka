import { Test, TestingModule } from '@nestjs/testing';
import { WeatherapiController } from './weatherapi.controller';
import { WeatherapiService } from './weatherapi.service';

describe('WeatherapiController', () => {
  let weatherapiController: WeatherapiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WeatherapiController],
      providers: [WeatherapiService],
    }).compile();

    weatherapiController = app.get<WeatherapiController>(WeatherapiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(weatherapiController.getHello()).toBe('Hello World!');
    });
  });
});
