import { Test, TestingModule } from '@nestjs/testing';
import { UsertypesController } from './usertypes.controller';
import { UsertypesService } from './usertypes.service';

describe('UsertypesController', () => {
  let controller: UsertypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsertypesController],
      providers: [UsertypesService],
    }).compile();

    controller = module.get<UsertypesController>(UsertypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
