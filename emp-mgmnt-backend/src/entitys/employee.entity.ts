/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { EmpDesgnationInfo } from "./empCompanyInfo";

/**
 * starting of Employee Entity
 */
@Entity()
export class Employee {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates personalEmailId column
     */
    @Column()
    @IsEmail()
    @ApiProperty()
    personalEmailId: string;

    /**
    * generates companyMailId column
    */
    @Column()
    @IsString()
    @ApiProperty()
    companyMailId: string;

    /**
     * generates firstName column
    */
    @Column()
    @IsString()
    @ApiProperty()
    firstName: string;

    /**
     * generates address column
    */
    @Column()
    @IsString()
    @ApiProperty()
    address: string;

    /**
     * generates lastName column
    */
    @Column()
    @IsString()
    @ApiProperty()
    lastName: string;

    /**
     * generates gender column
    */
    @Column()
    @IsString()
    @ApiProperty()
    gender: string;


    /**
     * generates gender column
    */
    @Column()
    @IsNumber()
    @ApiProperty()
    sapId: number;

    /**
   * generates isActive column
   */
    @Column()
    @ApiProperty()
    isActive: boolean;

    /**
     * generates updatedAt column
     */
    @Column()
    @IsString()
    updatedTime: string;

    /**
     * generates createdAt column
     */
    @Column()
    @IsString()
    createdAt: string;

    /**
     * generates updatedat column
     */
    @Column()
    @IsString()
    updatedAt: string;

    /**
     * generates createTime column
     */
    @Column()
    @IsString()
    createTime: string;

    /**
     * generates createTime column
     */
     @Column()
     @IsNumber()
     phoneNum: number;
 

    /**
     * One to many  relationship between EmpCompanyInfo and employee
     */
    @OneToOne(() => EmpDesgnationInfo, (empDesgnationInfo) => empDesgnationInfo.employee, {
    })
    @JoinColumn()
    empDesgnationInfo: EmpDesgnationInfo;

}
