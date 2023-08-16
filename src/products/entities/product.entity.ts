import { Category } from "src/category/entities/category.entity";
import { Productdetail } from "src/productdetails/entities/productdetail.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 60
    })
    productName: string;

    @Column({
        length: 255
    })
    productDescription: string;

    @Column()
    quantityPerUnit: number;

    @Column({
        length: 20
    })
    unitSize: string;

    @Column({
        length: 15
    })
    unitPrice: string;

    @Column()
    MSRP: string;

    @Column({
        length: 50
    })
    availableSize: string;

    @Column({
        length: 100
    })
    availableColors: string;

    @Column()
    discount: number;

    @Column()
    unitWeight: number;

    @Column()
    unitsInStock: number;

    @Column()
    unitsOnOrder: number;

    @Column()
    reorderLevel: number;

    @Column({
        default: true
    })
    productAvailable: boolean;

    @Column({
        default: false
    })
    discountAvailable: boolean;

    @Column({
        default: false
    })
    currentOrder: boolean;

    @Column({
        length: 50
    })
    picture: string;

    @Column()
    ranking: number;

    @Column({
        length: 255
    })
    note: string;

    @OneToOne(() => Supplier)
    @JoinColumn()
    supplier: Supplier;

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;

    @OneToMany(() => Productdetail, (productdetail) => productdetail.product)
    @JoinColumn()
    productdetails: Productdetail[]
    
}
