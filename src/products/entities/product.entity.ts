import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    SKU: number;

    @Column()
    IDSKU: number;

    @Column()
    VendorProductId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    supplierId: number;


    @Column()
    categoryId: number;

    @Column()
    quantityPerUnit: number;

    @Column()
    unitPrice: string;

    @Column()
    MSRP: string;

    @Column()
    availableSize: string;

    @Column()
    availableColors: string;

    @Column()
    size: string;

    @Column()
    color: string;

    @Column()
    discount: number;

    @Column()
    unitWeight: string;

    @Column()
    unitsInStock: string;

    @Column()
    unitsOnOrder: string;

    @Column()
    reorderLevel: string;

    @Column()
    productAvailable: boolean;

    @Column()
    discountAvailable: boolean;

    @Column()
    currentOrder: string;

    @Column()
    picture: string;

    @Column()
    ranking: number;

    @Column()
    note: string;
}
