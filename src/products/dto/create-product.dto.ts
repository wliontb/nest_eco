import { IsBoolean, IsBooleanString, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    picture: string;

    @IsNumberString()
    price: number;

    @IsNumberString()
    discount: number;

    @IsNumberString()
    discount_available: number;

    @IsNumberString()
    product_available: number;

    @IsNumberString()
    supplier_id: number;

    @IsNumberString()
    category_id: number;

    @IsBooleanString()
    is_trending: string;

    @IsBooleanString()
    is_flashsale: string;
}
