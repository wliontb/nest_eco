import { Module } from '@nestjs/common';
import { ProductpropsService } from './productprops.service';
import { ProductpropsController } from './productprops.controller';

@Module({
  controllers: [ProductpropsController],
  providers: [ProductpropsService],
})
export class ProductpropsModule {}
