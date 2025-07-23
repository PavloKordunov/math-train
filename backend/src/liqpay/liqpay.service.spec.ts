import { Test, TestingModule } from '@nestjs/testing';
import { LiqpayService } from './liqpay.service';

describe('LiqpayService', () => {
  let service: LiqpayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiqpayService],
    }).compile();

    service = module.get<LiqpayService>(LiqpayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
