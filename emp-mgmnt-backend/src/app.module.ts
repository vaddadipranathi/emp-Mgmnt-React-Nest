import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './entitys/employee.entity';
import { EmpDesgnationInfo } from './entitys/empCompanyInfo';
import { EmpDesgnationInfoModule } from './modules/emp-desgnation-info/emp-desgnation-info.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chelli1@',
      database: 'employeeMgmnt',
      entities: [Employee, EmpDesgnationInfo],
      synchronize: false,
    }),
    EmpDesgnationInfoModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
