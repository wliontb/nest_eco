import { Module } from '@nestjs/common';
import { ProductdetailsService } from './productdetails.service';
import { ProductdetailsController } from './productdetails.controller';

@Module({
  controllers: [ProductdetailsController],
  providers: [ProductdetailsService],
})
export class ProductdetailsModule {}
