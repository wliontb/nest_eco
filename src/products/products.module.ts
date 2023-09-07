import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Category } from 'src/category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Supplier, Category])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
