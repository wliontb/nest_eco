import { IsBooleanString, IsNumberString, IsString } from "class-validator";

export class CreateProductdetailDto {
    @IsString()
    nameDetail: string;

    @IsString()
    picture: string;

    @IsNumberString()
    price: string;

    @IsNumberString()
    qty: string;

    @IsNumberString()
    discount: string;

    @IsBooleanString()
    discountAvailable: string;

    @IsNumberString()
    productId: string;

}
