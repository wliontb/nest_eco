import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductpropsService } from './productprops.service';
import { CreateProductpropDto } from './dto/create-productprop.dto';
import { UpdateProductpropDto } from './dto/update-productprop.dto';

@Controller('productprops')
export class ProductpropsController {
  constructor(private readonly productpropsService: ProductpropsService) {}

  @Post()
  create(@Body() createProductpropDto: CreateProductpropDto) {
    return this.productpropsService.create(createProductpropDto);
  }

  @Get()
  findAll() {
    return this.productpropsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productpropsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductpropDto: UpdateProductpropDto) {
    return this.productpropsService.update(+id, updateProductpropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productpropsService.remove(+id);
  }
}
