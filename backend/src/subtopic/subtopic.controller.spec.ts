import { Test, TestingModule } from '@nestjs/testing';
import { SubtopicController } from './subtopic.controller';

describe('SubtopicController', () => {
  let controller: SubtopicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtopicController],
    }).compile();

    controller = module.get<SubtopicController>(SubtopicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
