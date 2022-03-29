/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IsEmail } from 'class-validator';

/**
 * Starting of EmployeeDto
 */
export class EmployeeDto {
  /**
   * firstName recieves input of type string
   */
  @IsString()
  @ApiProperty()
  firstName: string;

  /**
   * lastName recieves input of type string
   */
  @IsString()
  @ApiProperty()
  lastName: string;

  /**
 * phoneNum recieves input of type number
 */
  // @IsNumber()
  @ApiProperty()
  phoneNum: number;
  /**
   * companyMailId recieves input of type string
   */
  @IsEmail()
  @ApiProperty()
  personalEmailId: string;

  /**
   * companyMailId recieves input of type string
   */
  @IsString()
  @ApiProperty()
  gender: string;

  /**
   * addressLine1 recieves input of type string
   */
  @IsString()
  @ApiProperty()
  address: string;


  /**
   * pincode recieves input of type string
   */
  // @IsNumber()
  @ApiProperty()
  sapId: number;

  /**
   * gender  input of type string
   */
  @IsString()
  @ApiProperty()
  desgination: string;

  /**
   * salary recieves input of type string
   */
  @IsString()
  @ApiProperty()
  salary: string;

  /**
   * experince recieves input of type string
   */
  @IsString()
  @ApiProperty()
  experince: string;

  /**
 * experince recieves input of type string
 */
  @IsString()
  @ApiProperty()
  dateofJoining: string;
  
}