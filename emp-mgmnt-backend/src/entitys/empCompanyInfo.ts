/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { IsString } from "class-validator";
import { Employee } from "./employee.entity";

/**
 * starting of Employee Entity
 */
@Entity()
export class EmpDesgnationInfo {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates personalEmailId column
     */
    @Column()
    @IsString()
    @ApiProperty()
    desgination: string;

    /**
    * experince recieves input of type string
    */
    @Column()
    @IsString()
    @ApiProperty()
    dateofJoining: string;
    /**
    * generates companyMailId column
    */
    @Column()
    @IsString()
    @ApiProperty()
    salary: string;

    /**
     * generates firstName column
    */
    @Column()
    @IsString()
    @ApiProperty()
    experince: string;

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
    * One to many  relationship between Employee and empCompanyInfo
    */
    @OneToOne(() => Employee, (Employee) => Employee.empDesgnationInfo, {
    })
    employee: Employee;

}
