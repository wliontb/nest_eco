import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { IsBooleanString, IsEmail, IsNumberString, IsString } from 'class-validator';

export class UpdateCustomerDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    nation1: string;

    @IsString()
    city1: string;

    @IsString()
    district1: string;

    @IsString()
    address1: string;

    @IsString()
    nation2: string;

    @IsString()
    city2: string;

    @IsString()
    district2: string;

    @IsString()
    address2: string;

    @IsNumberString()
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    avatar: string;

    @IsBooleanString()
    gender: string;

    @IsString()
    password: string;
}
