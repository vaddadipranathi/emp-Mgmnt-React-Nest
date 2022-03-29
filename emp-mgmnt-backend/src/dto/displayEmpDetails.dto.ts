/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * Starting of DisplayEmployeeDetailsDto
 */
export class DisplayEmployeeDetailsDto {
  /**
   * firstName recieves input of type string
   */
  @IsString()
  @ApiProperty()
  firstName: string;

  /**
 * firstName recieves input of type string
 */
  @IsString()
  @ApiProperty()
  lastName: string;

  /**
 * phoneNum recieves input of type number
 */
  @ApiProperty()
  phoneNum: number;

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

}