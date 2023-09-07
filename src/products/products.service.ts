import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async create(createProductDto: CreateProductDto) {
    const supplier = await this.supplierRepository.findOne({
      where: {
        id: createProductDto.supplier_id
      }
    })

    const category = await this.categoryRepository.findOne({
      where: {
        id: createProductDto.category_id
      }
    })

    const product = this.productRepository.create();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.picture = createProductDto.picture;
    product.price = createProductDto.price;
    product.discount = createProductDto.discount;
    product.discountAvailable = !!createProductDto.discount_available;
    product.productAvailable = !!createProductDto.product_available;
    product.category = category;
    product.supplier = supplier;

    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
