import { Product } from "src/products/entities/product.entity";
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Productdetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    color: string;

    @Column()
    size: string;

    @ManyToOne(() => Product, (product) => product.productdetails)
    @JoinColumn()
    product: Product;
}
