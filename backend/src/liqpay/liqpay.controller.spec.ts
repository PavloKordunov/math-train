import { Test, TestingModule } from '@nestjs/testing';
import { LiqpayController } from './liqpay.controller';

describe('LiqpayController', () => {
  let controller: LiqpayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiqpayController],
    }).compile();

    controller = module.get<LiqpayController>(LiqpayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
