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

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne({
      where: {
        id
      }
    })

    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOne({
      where: {
        id
      }
    })

    customer.firstName = updateCustomerDto.firstName;
    customer.lastName = updateCustomerDto.lastName;
    customer.nation1 = updateCustomerDto.nation1;
    customer.city1 = updateCustomerDto.city1;
    customer.district1 = updateCustomerDto.district1;
    customer.nation2 = updateCustomerDto.nation2;
    customer.city2 = updateCustomerDto.city2;
    customer.district2 = updateCustomerDto.district2;
    customer.address1 = updateCustomerDto.address1;
    customer.address2 = updateCustomerDto.address2;
    customer.phone = updateCustomerDto.phone;
    customer.email = updateCustomerDto.email;
    customer.avatar = updateCustomerDto.avatar;
    customer.gender = !!updateCustomerDto.gender;
    customer.password = updateCustomerDto.password;

    return await this.customerRepository.save(customer);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
