import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataNotAdded,
  DataNotFoundException,
} from 'src/common/filter/customException.exception';
import { Logger } from 'src/config/logger/logger.service';
import { DisplayEmployeeDetailsDto } from 'src/dto/displayEmpDetails.dto';
import { EmployeeDto } from 'src/dto/employeeDetails.dto';
import { Employee } from 'src/entitys/employee.entity';
import { Repository } from 'typeorm';
import { EmpDesgnationInfoService } from '../emp-desgnation-info/emp-desgnation-info.service';
import { EmpDesgnationInfo } from './../../entitys/empCompanyInfo';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
    private empDesgnationInfoService: EmpDesgnationInfoService,
    private loggerService: Logger,
  ) {}

  async addEmployeeDetails(employeeDto: EmployeeDto): Promise<any> {
    console.log('enterd');
    const employee = new Employee();
    const empDesgInfo = new EmpDesgnationInfo();
    Object.assign(employee, employeeDto);
    Object.assign(empDesgInfo, employeeDto);
    empDesgInfo.isActive = true;
    const date = new Date();
    empDesgInfo.updatedAt = date.toLocaleDateString();
    empDesgInfo.updatedTime = date.toLocaleDateString();
    empDesgInfo.createdAt = date.toLocaleDateString();
    empDesgInfo.createTime = date.toLocaleTimeString();
    const empDesgnResult =
      await this.empDesgnationInfoService.addEmpDesgnationInfo(empDesgInfo);
    console.log('--- ', empDesgnResult);
    employee.updatedAt = date.toLocaleDateString();
    employee.updatedTime = date.toLocaleDateString();
    employee.createdAt = date.toLocaleDateString();
    employee.createTime = date.toLocaleTimeString();
    employee.isActive = true;
    employee.empDesgnationInfo = empDesgnResult;
    employee.companyMailId =
      employee.firstName + '.' + employee.lastName + '@hcl.com';
    console.log('emp obj: ', employee);
    return await this.employeeRepo.save(employee);
  }

  async getBasedOnCompanyMailId(companyMailId: string) {
    const result = await this.employeeRepo.findOne({
      companyMailId: companyMailId,
    });
    if (result) {
      this.loggerService.log('Emp details added succesfully');
      return result;
    } else {
      this.loggerService.error('Emp details not added succesfully');
      throw new DataNotFoundException();
    }
  }

  async getAllEmployeeDetails(): Promise<Employee[]> {
    const result = await this.employeeRepo.find({
      isActive: true,
    });
    if (result) {
      this.loggerService.log('Emp details found succesfully');
      return result;
    } else {
      this.loggerService.error('Emp details not found succesfully');
      throw new DataNotFoundException();
    }
  }

  async getByCompanyMailId(
    companyMailId: string,
  ): Promise<DisplayEmployeeDetailsDto> {
    const empResult = await this.employeeRepo.findOne({
      companyMailId: companyMailId,
    });
    const empDesgRes = await this.empDesgnationInfoService.getBasedOnId(
      empResult.id,
    );
    if (empResult.sapId) {
      this.loggerService.log('Emp details found succesfully');
      const displayEmployeeDetailsDto = new DisplayEmployeeDetailsDto();
      displayEmployeeDetailsDto.desgination = empDesgRes.desgination;
      displayEmployeeDetailsDto.firstName = empResult.firstName;
      displayEmployeeDetailsDto.lastName = empResult.lastName;
      displayEmployeeDetailsDto.phoneNum = empResult.phoneNum;
      displayEmployeeDetailsDto.sapId = empResult.sapId;
      return displayEmployeeDetailsDto;
    } else {
      this.loggerService.error('Emp details not found succesfully');
      throw new DataNotFoundException();
    }
  }

  async deleteEmpOnCompanyMail(companyMailId: string): Promise<string> {
    const empResult = await this.employeeRepo.findOne({
      companyMailId: companyMailId,
    });
    empResult.isActive = false;
    const empDesgRes = await this.empDesgnationInfoService.getBasedOnId(
      empResult.id,
    );
    this.empDesgnationInfoService.updateEmpDesgnationInfo(empDesgRes);
    this.employeeRepo.update(empResult.id, empResult);
    return 'employee details got deleted sucessfully';
  }
}
