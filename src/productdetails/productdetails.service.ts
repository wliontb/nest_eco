import { Injectable } from '@nestjs/common';
import { CreateProductdetailDto } from './dto/create-productdetail.dto';
import { UpdateProductdetailDto } from './dto/update-productdetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Productdetail } from './entities/productdetail.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ProductdetailsService {
  constructor(
    @InjectRepository(Productdetail)
    private readonly prodDetailRepository: Repository<Productdetail>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async create(createProductdetailDto: CreateProductdetailDto) {
    const product = await this.productRepository.findOne({
      where: {
        id: +createProductdetailDto.productId
      }
    })

    const prodDetail = this.prodDetailRepository.create();
    prodDetail.nameDetail = createProductdetailDto.nameDetail;
    prodDetail.picture = createProductdetailDto.picture;
    prodDetail.price = +createProductdetailDto.price;
    prodDetail.discount = +createProductdetailDto.discount;
    prodDetail.discountAvailable = !!createProductdetailDto.discountAvailable;
    prodDetail.qty = +createProductdetailDto.qty;
    prodDetail.product = product;

    return await this.prodDetailRepository.save(prodDetail);
  }

  async findAll(productQuery?: any) {
    const queryOptions: any = {
      order: {
        id: 'DESC',
      },
    };

    if (productQuery !== undefined) {
      queryOptions.where = {
        product: {
          id: productQuery.product
        }
      };
    }

    const prodDetails = await this.prodDetailRepository.find(queryOptions);

    return prodDetails;
  }

  findOne(id: number) {
    return `This action returns a #${id} productdetail`;
  }

  update(id: number, updateProductdetailDto: UpdateProductdetailDto) {
    return `This action updates a #${id} productdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} productdetail`;
  }
}
