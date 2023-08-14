import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentModule } from './payment/payment.module';
import { CategoryModule } from './category/category.module';
import { ShippersModule } from './shippers/shippers.module';
import { OrderdetailsModule } from './orderdetails/orderdetails.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CustomersModule, OrdersModule, PaymentModule, CategoryModule, ShippersModule, OrderdetailsModule, ProductsModule, SuppliersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
