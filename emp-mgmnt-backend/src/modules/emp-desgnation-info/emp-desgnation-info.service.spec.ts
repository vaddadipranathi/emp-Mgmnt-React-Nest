import { Test, TestingModule } from '@nestjs/testing';
import { EmpDesgnationInfoService } from './emp-desgnation-info.service';

describe('EmpDesgnationInfoService', () => {
  let service: EmpDesgnationInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpDesgnationInfoService],
    }).compile();

    service = module.get<EmpDesgnationInfoService>(EmpDesgnationInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
