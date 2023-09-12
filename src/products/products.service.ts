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
    product.isFlashsale = !!createProductDto.is_flashsale;
    product.isTrending = !!createProductDto.is_trending;

    return await this.productRepository.save(product);
  }

  async findAll(queryFilter?: any) {
    const queryOptions: any = {
      relations: ['category', 'supplier'], // Sử dụng mảng thay vì đối tượng để chỉ định các mối quan hệ
    };

    if (queryFilter !== undefined) {
      if (queryFilter.categoryId) {
        queryOptions.where = {
          category: {
            id: queryFilter.categoryId,
          },
        };
      }
      if (queryFilter.flashsale) {
        if (!queryOptions.where) {
          queryOptions.where = {};
        }
        queryOptions.where.isFlashsale = true;
      }
      if (queryFilter.trending) {
        if (!queryOptions.where) {
          queryOptions.where = {};
        }
        queryOptions.where.isTrending = true;
      }
      if (queryFilter.limit) {
        queryOptions.take = queryFilter.limit;
      }
    }

    return await this.productRepository.find(queryOptions);
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({
      where: {
        id
      },
      relations: {
        supplier: true,
        category: true
      },
      
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
    product.isFlashsale = !!updateProductDto.is_flashsale;
    product.isTrending = !!updateProductDto.is_trending;
    
    return await this.productRepository.save(product);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
