import { Test, TestingModule } from '@nestjs/testing';
import { RegistercompetitionController } from './registercompetition.controller';
import { RegistercompetitionService } from './registercompetition.service';

describe('RegistercompetitionController', () => {
  let controller: RegistercompetitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistercompetitionController],
      providers: [RegistercompetitionService],
    }).compile();

    controller = module.get<RegistercompetitionController>(RegistercompetitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
