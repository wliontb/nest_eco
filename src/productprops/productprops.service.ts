import { Injectable } from '@nestjs/common';
import { CreateProductpropDto } from './dto/create-productprop.dto';
import { UpdateProductpropDto } from './dto/update-productprop.dto';

@Injectable()
export class ProductpropsService {
  create(createProductpropDto: CreateProductpropDto) {
    return 'This action adds a new productprop';
  }

  findAll() {
    return `This action returns all productprops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productprop`;
  }

  update(id: number, updateProductpropDto: UpdateProductpropDto) {
    return `This action updates a #${id} productprop`;
  }

  remove(id: number) {
    return `This action removes a #${id} productprop`;
  }
}
