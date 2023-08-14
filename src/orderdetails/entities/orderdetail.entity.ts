import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Orderdetail {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryGeneratedColumn()
    orderId: number;

    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    orderNumber: number;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    discount: number;

    @Column()
    total: number;

    @Column()
    IDSKU: number;

    @Column()
    size: number;

    @Column()
    color: string;

    @Column()
    fulfilled: string;

    @Column()
    shipDate: Date;

    @Column()
    billDate: Date;
}
