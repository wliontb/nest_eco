import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>
  ){}

  async create(createSupplierDto: CreateSupplierDto) {
    try {
      console.log(createSupplierDto);
      const {
        postal_code,
        ...supplierObj
      } = createSupplierDto;
      const supplier = this.supplierRepository.create({
        ...supplierObj,
        postalCode: postal_code
      });

      return this.supplierRepository.save(supplier);
    } catch (error) {
      console.log(error)
    }
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
