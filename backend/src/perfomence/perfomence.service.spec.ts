import { Test, TestingModule } from '@nestjs/testing';
import { PerfomenceService } from './perfomence.service';

describe('PerfomenceService', () => {
  let service: PerfomenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfomenceService],
    }).compile();

    service = module.get<PerfomenceService>(PerfomenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
