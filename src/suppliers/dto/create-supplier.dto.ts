import { IsNumber, IsString, IsNumberString, IsEmail, IsBoolean } from "class-validator";

export class CreateSupplierDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumberString()
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    country: string;

    @IsString()
    postal_code: string;

    @IsString()
    url: string;

    @IsString()
    logo: string;

    @IsNumber()
    ranking: number;

    @IsBoolean()
    active: boolean;
}
