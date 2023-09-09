import CustomBaseEntity from "src/database/entities/base.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productdetail extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameDetail: string;

    @Column()
    price: number;

    @Column()
    discount: number;

    @Column({
        default: false
    })
    discountAvailable: boolean;

    @Column({
        length: 50
    })
    picture: string;

    @Column({
        default: 0
    })
    qty: number;

    @ManyToOne(() => Product, (product) => product.productdetails)
    @JoinColumn()
    product: Product;

    @Column()
    productId: number;
}
