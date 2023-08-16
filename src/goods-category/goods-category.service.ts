import { Injectable } from '@nestjs/common';
import { CreateGoodsCategoryDto } from './dto/create-goods-category.dto';
import { UpdateGoodsCategoryDto } from './dto/update-goods-category.dto';

@Injectable()
export class GoodsCategoryService {
  create(createGoodsCategoryDto: CreateGoodsCategoryDto) {
    return 'This action adds a new goodsCategory';
  }

  findAll() {
    return `This action returns all goodsCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} goodsCategory`;
  }

  update(id: number, updateGoodsCategoryDto: UpdateGoodsCategoryDto) {
    return `This action updates a #${id} goodsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} goodsCategory`;
  }
}
