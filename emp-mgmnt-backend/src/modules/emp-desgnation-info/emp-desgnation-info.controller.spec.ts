import { Test, TestingModule } from '@nestjs/testing';
import { EmpDesgnationInfoController } from './emp-desgnation-info.controller';

describe('EmpDesgnationInfoController', () => {
  let controller: EmpDesgnationInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpDesgnationInfoController],
    }).compile();

    controller = module.get<EmpDesgnationInfoController>(EmpDesgnationInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
