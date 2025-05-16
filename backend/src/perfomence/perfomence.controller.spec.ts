import { Test, TestingModule } from '@nestjs/testing';
import { PerfomenceController } from './perfomence.controller';

describe('PerfomenceController', () => {
  let controller: PerfomenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfomenceController],
    }).compile();

    controller = module.get<PerfomenceController>(PerfomenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
