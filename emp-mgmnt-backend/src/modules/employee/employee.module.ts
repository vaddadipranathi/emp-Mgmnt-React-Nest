import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { EmpDesgnationInfo } from 'src/entitys/empCompanyInfo';
import { Employee } from 'src/entitys/employee.entity';
import { EmpDesgnationInfoService } from '../emp-desgnation-info/emp-desgnation-info.service';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, EmpDesgnationInfo])],
  providers: [EmployeeService, EmpDesgnationInfoService, Logger],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
