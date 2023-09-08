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
    return await this.productRepository.find({
      relations: {
        category: true,
        supplier: true
      }
    });
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({
      where: {
        id
      },
      relations: {
        supplier: true,
        category: true
      }
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const supplier = await this.supplierRepository.findOne({
      where: {
        id: updateProductDto.supplier_id
      }
    })

    const category = await this.categoryRepository.findOne({
      where: {
        id: updateProductDto.category_id
      }
    })

    const product = await this.productRepository.findOne({
      where: {
        id
      }
    });
    product.name = updateProductDto.name;
    product.description = updateProductDto.description;
    product.picture = updateProductDto.picture;
    product.price = updateProductDto.price;
    product.discount = updateProductDto.discount;
    product.discountAvailable = !!updateProductDto.discount_available;
    product.productAvailable = !!updateProductDto.product_available;
    product.supplier = supplier;
    product.category = category;
    
    return await this.productRepository.save(product);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
