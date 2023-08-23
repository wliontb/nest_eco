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

      return this.supplierRepository.save(supplier);
  }

  async findAll() {
    try {
      const supplierArr = await this.supplierRepository.find();

      return supplierArr
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findOne(id: number) {
    try {
      const supplier = await this.supplierRepository.findOne({
        where: {
          id
        }
      });

      return supplier
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  async remove(id: number) {
    try {
      return true
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
