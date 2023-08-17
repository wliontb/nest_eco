import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
