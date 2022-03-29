import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataNotAdded,
  DataNotFoundException,
} from 'src/common/filter/customException.exception';
import { Logger } from 'src/config/logger/logger.service';
import { EmpDesgnationInfo } from 'src/entitys/empCompanyInfo';
import { Repository } from 'typeorm';

@Injectable()
export class EmpDesgnationInfoService {
  constructor(
    @InjectRepository(EmpDesgnationInfo)
    private empDesgnationInfoRepo: Repository<EmpDesgnationInfo>,
    private loggerService: Logger,
  ) {}

  async addEmpDesgnationInfo(empDesgnationInfo: EmpDesgnationInfo) {
    const result = await this.empDesgnationInfoRepo.save(empDesgnationInfo);
    if (result) {
      this.loggerService.log('Emp Desgnation details added succesfully');
      return result;
    } else {
      this.loggerService.error('Emp Desgnation details not added succesfully');
      throw new DataNotAdded();
    }
  }

  async updateEmpDesgnationInfo(empDesgnationInfo: EmpDesgnationInfo) {
    empDesgnationInfo.isActive = false;
    const result = await this.empDesgnationInfoRepo.update(
      empDesgnationInfo.id,
      empDesgnationInfo,
    );
    if (result) {
      this.loggerService.log('Emp Desgnation details updated succesfully');
      return result;
    } else {
      this.loggerService.error(
        'Emp Desgnation details not updated succesfully',
      );
      throw new DataNotAdded();
    }
  }

  async getBasedOnId(id: number) {
    const result = await this.empDesgnationInfoRepo.findOne({
      id: id,
    });
    if (result) {
      this.loggerService.log('Emp Desgnation details found succesfully');
      return result;
    } else {
      this.loggerService.error('Emp Desgnation details not found succesfully');
      throw new DataNotFoundException();
    }
  }
}
