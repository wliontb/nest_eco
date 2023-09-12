import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('register')
  async singup(@Body() createCustomerDto: CreateCustomerDto) {
    const customer = await this.customersService.signup(createCustomerDto);

    return {
      result: customer,
      status: 'success'
    }
  }

  @Post('login')
  async signin(@Body() loginBody: LoginCustomerDto) {
    const customer = await this.customersService.signin(loginBody);
    
    return {
      result: customer,
      status: 'success'
    }
  }

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const customer = await this.customersService.create(createCustomerDto);

    return {
      result: customer,
      stauts: 'success'
    }
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const customer = await this.customersService.findOne(+id);

    return {
      result: customer,
      status: 'success'
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customersService.update(+id, updateCustomerDto);

    return {
      result: customer,
      status: 'success'
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
