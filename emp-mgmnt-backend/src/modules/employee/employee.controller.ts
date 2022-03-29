import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeeDto } from 'src/dto/employeeDetails.dto';
import { UpdateEmployeeDto } from 'src/dto/updateEmployeeDetails.dto';
import { Employee } from 'src/entitys/employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/addEmployeeDetails')
  addEmployeeDetails(@Body() employeeDto: EmployeeDto): Promise<any> {
    return this.employeeService.addEmployeeDetails(employeeDto);
  }

  @Get('/getAllEmployeeDetails')
  getAllEmployeeDetails(): Promise<Employee[]> {
    return this.employeeService.getAllEmployeeDetails();
  }

  @Get('/getBasedOnCompanyMailId/:companyMailId')
  getByCompanyMailId(@Param('companyMailId') companyMailId: string) {
    return this.employeeService.getByCompanyMailId(companyMailId);
  }

  @Delete('/deleteEmpOnCompanyMail/:companyMailId')
  deleteEmpOnCompanyMail(
    @Param('companyMailId') companyMailId: string,
  ): Promise<string> {
    return this.employeeService.deleteEmpOnCompanyMail(companyMailId);
  }
}
