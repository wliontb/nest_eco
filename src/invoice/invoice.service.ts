import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceChildDto, createCheckoutDto } from './dto/create-checkout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { Repository } from 'typeorm';
import { InvoiceChild } from 'src/invoice_child/entities/invoice_child.entity';
import { Product } from 'src/products/entities/product.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    @InjectRepository(InvoiceChild)
    private readonly invoiceChildRepository: Repository<InvoiceChild>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    return 'This action adds a new invoice';
  }

  async createCheckout(createCheckoutDto: createCheckoutDto) {
    const customer = await this.customerRepository.findOne({
      where: {
        id: +createCheckoutDto.customerId
      }
    })

    const invoice = this.invoiceRepository.create();
    invoice.full_name = createCheckoutDto.full_name;
    invoice.phone = +createCheckoutDto.phone;
    invoice.nation = createCheckoutDto.nation;
    invoice.city = createCheckoutDto.city;
    invoice.district = createCheckoutDto.district;
    invoice.address = createCheckoutDto.address;
    invoice.shipping = +createCheckoutDto.shipping;
    invoice.payment = +createCheckoutDto.payment;
    invoice.total = +createCheckoutDto.total;
    invoice.customer = customer;

    await this.invoiceRepository.save(invoice);

    for(const ivc of createCheckoutDto.invoice_childs) {
      const product = await this.productRepository.findOne({
        where: {id: +ivc.productId}
      })
      const child = this.invoiceChildRepository.create();
      child.invoice = invoice;
      child.product = product;
      child.qty = +ivc.qty;
      child.total = +ivc.total;
      await this.invoiceChildRepository.save(child);
    }

    return await this.invoiceRepository.findOne({
      where: {
        id: invoice.id
      },
      relations: {
        invoiceChild: true
      }
    });

  }

  async findAll(queryFilter?: any) {
    const queryOptions: any = {
      order: {
        id: 'DESC'
      },
      relations: ['customer', 'invoiceChild', 'invoiceChild.product'],
    };

    if (queryFilter !== undefined) {
      if (queryFilter.customerId) {
        queryOptions.where = {
          customer: {
            id: queryFilter.customerId,
          },
        };
      }
      if (queryFilter.limit) {
        queryOptions.take = queryFilter.limit;
      }
    }

    return await this.invoiceRepository.find(queryOptions);
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
