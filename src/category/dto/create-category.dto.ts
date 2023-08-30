import { IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    categoryName: string;

    @IsString()
    description: string;

    @IsString()
    picture: string;

    @IsNumberString()
    active: number;

    @IsNumberString()
    goodCateId: number;
}

