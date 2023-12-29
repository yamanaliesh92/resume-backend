import { Test, TestingModule } from '@nestjs/testing';
import { EductionController } from './eduction.controller';

describe('EductionController', () => {
  let controller: EductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EductionController],
      // providers: [UserService],
    }).compile();

    controller = module.get<EductionController>(EductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
