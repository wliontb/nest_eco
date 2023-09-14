import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { createCheckoutDto } from './dto/create-checkout.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}


  @Post('/checkout')
  async createCheckout(@Body() createCheckoutDto: createCheckoutDto) {
    const invoice = await this.invoiceService.createCheckout(createCheckoutDto);
    return {
      result: invoice,
      status: 'success'
    }
  }

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  async findAll(@Query() queryFilter: any) {
    const invoices = await this.invoiceService.findAll(queryFilter);
    return {
      result: invoices,
      status: 'success'
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(+id, updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(+id);
  }
}
