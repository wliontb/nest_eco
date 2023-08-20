import { Category } from "src/category/entities/category.entity";
import CustomBaseEntity from "src/database/entities/base.entity";
import { Productdetail } from "src/productdetails/entities/productdetail.entity";
import { Productprop } from "src/productprops/entities/productprop.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 60
    })
    name: string;

    @Column({
        length: 255
    })
    description: string;

    @Column()
    picture: string;

    @Column()
    price: number;

    @Column()
    discount: number;

    @Column({
        default: false
    })
    discountAvailable: boolean;

    @Column({
        default: true
    })
    productAvailable: boolean;    

    @OneToOne(() => Supplier)
    @JoinColumn()
    supplier: Supplier;

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;

    @OneToMany(() => Productdetail, (productdetail) => productdetail.product)
    @JoinColumn()
    productdetails: Productdetail[]

    @OneToMany(() => Productprop, (productprop) => productprop.product)
    @JoinColumn()
    productprops: Productprop[]
}
