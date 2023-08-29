import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { GoodsCategory } from 'src/goods-category/entities/goods-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, GoodsCategory])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
