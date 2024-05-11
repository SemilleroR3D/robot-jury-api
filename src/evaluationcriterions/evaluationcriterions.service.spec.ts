import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationcriterionsService } from './evaluationcriterions.service';

describe('EvaluationcriterionsService', () => {
  let service: EvaluationcriterionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluationcriterionsService],
    }).compile();

    service = module.get<EvaluationcriterionsService>(
      EvaluationcriterionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
