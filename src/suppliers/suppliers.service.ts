import { BadRequestException, Catch, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { QueryFailedFilter } from 'src/common/exceptions/query.filter';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>
  ){}

  async create(createSupplierDto: CreateSupplierDto) {
      const {
        postal_code,
        ...supplierObj
      } = createSupplierDto;
      const supplier = this.supplierRepository.create({
        ...supplierObj,
        postalCode: postal_code
      });

      // throw new HttpException('hehe', HttpStatus.FORBIDDEN)

      return this.supplierRepository.save(supplier);
  }

  findAll() {
    return `This action returns all suppliers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
