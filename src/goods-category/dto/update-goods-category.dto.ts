import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodsCategoryDto } from './create-goods-category.dto';

export class UpdateGoodsCategoryDto extends PartialType(CreateGoodsCategoryDto) {}
