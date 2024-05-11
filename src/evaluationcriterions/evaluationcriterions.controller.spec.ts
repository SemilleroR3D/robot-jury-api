import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationcriterionsController } from './evaluationcriterions.controller';
import { EvaluationcriterionsService } from './evaluationcriterions.service';

describe('EvaluationcriterionsController', () => {
  let controller: EvaluationcriterionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluationcriterionsController],
      providers: [EvaluationcriterionsService],
    }).compile();

    controller = module.get<EvaluationcriterionsController>(EvaluationcriterionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
