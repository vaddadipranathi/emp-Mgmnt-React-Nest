import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { EmpDesgnationInfo } from 'src/entitys/empCompanyInfo';
import { EmpDesgnationInfoService } from '../emp-desgnation-info/emp-desgnation-info.service';
import { EmpDesgnationInfoController } from './emp-desgnation-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmpDesgnationInfo])],
  providers: [EmpDesgnationInfoService, Logger],
  controllers: [EmpDesgnationInfoController],
  exports: [EmpDesgnationInfoService],
})
export class EmpDesgnationInfoModule {}
