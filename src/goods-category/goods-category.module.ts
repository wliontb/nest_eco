import { Module } from '@nestjs/common';
import { GoodsCategoryService } from './goods-category.service';
import { GoodsCategoryController } from './goods-category.controller';

@Module({
  controllers: [GoodsCategoryController],
  providers: [GoodsCategoryService],
})
export class GoodsCategoryModule {}
