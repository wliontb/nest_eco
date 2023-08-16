import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoodsCategoryService } from './goods-category.service';
import { CreateGoodsCategoryDto } from './dto/create-goods-category.dto';
import { UpdateGoodsCategoryDto } from './dto/update-goods-category.dto';

@Controller('goods-category')
export class GoodsCategoryController {
  constructor(private readonly goodsCategoryService: GoodsCategoryService) {}

  @Post()
  create(@Body() createGoodsCategoryDto: CreateGoodsCategoryDto) {
    return this.goodsCategoryService.create(createGoodsCategoryDto);
  }

  @Get()
  findAll() {
    return this.goodsCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoodsCategoryDto: UpdateGoodsCategoryDto) {
    return this.goodsCategoryService.update(+id, updateGoodsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsCategoryService.remove(+id);
  }
}
