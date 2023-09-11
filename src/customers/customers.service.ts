import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { LoginCustomerDto } from './dto/login-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) { }

  async create(createCustomerDto: CreateCustomerDto) {
    return true;

  }

  async signup(createCustomerDto: CreateCustomerDto) {
    const customer = this.customerRepository.create();
    customer.email = createCustomerDto.email;
    customer.password = createCustomerDto.password;
    customer.phone = createCustomerDto.phone;

    customer.firstName = createCustomerDto.email.split('@')[0];

    return await this.customerRepository.save(customer)

  }

  async signin(loginBody: LoginCustomerDto) {
    const customer = await this.customerRepository.findOne({
      where: [
        { phone: loginBody.username },
        { email: loginBody.username }
      ]
    })

    const password = loginBody.password;

    if (!customer) {
      return null
    } else {
      if (password == customer.password) {
        return customer;
      } else {
        return null
      }
    }
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
