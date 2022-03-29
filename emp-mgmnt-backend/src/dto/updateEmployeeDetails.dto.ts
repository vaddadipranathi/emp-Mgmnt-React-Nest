/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * Starting of EmployeeDto
 */
export class UpdateEmployeeDto {
    /**
     * salary recieves input of type string
     */
    @IsString()
    @ApiProperty()
    salary: string;

    /**
     * phoneNum recieves input of type number
     */
    @ApiProperty()
    phoneNum: number;

    /**
   * phoneNum recieves input of type number
   */
    @IsString()
    @ApiProperty()
    address: string;

    /**
     * desgination  input of type string
     */
    @IsString()
    @ApiProperty()
    desgination: string;

    /**
     * companyMailId  input of type string
     */
    @IsString()
    @ApiProperty()
    companyMailId: string;
}