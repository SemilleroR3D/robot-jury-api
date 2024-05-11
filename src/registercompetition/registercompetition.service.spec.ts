import { Test, TestingModule } from '@nestjs/testing';
import { RegistercompetitionService } from './registercompetition.service';

describe('RegistercompetitionService', () => {
  let service: RegistercompetitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistercompetitionService],
    }).compile();

    service = module.get<RegistercompetitionService>(
      RegistercompetitionService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
