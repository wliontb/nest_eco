import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductdetailsService } from './productdetails.service';
import { CreateProductdetailDto } from './dto/create-productdetail.dto';
import { UpdateProductdetailDto } from './dto/update-productdetail.dto';

@Controller('productdetails')
export class ProductdetailsController {
  constructor(private readonly productdetailsService: ProductdetailsService) {}

  @Post()
  create(@Body() createProductdetailDto: CreateProductdetailDto) {
    return this.productdetailsService.create(createProductdetailDto);
  }

  @Get()
  findAll() {
    return this.productdetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productdetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductdetailDto: UpdateProductdetailDto) {
    return this.productdetailsService.update(+id, updateProductdetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productdetailsService.remove(+id);
  }
}
