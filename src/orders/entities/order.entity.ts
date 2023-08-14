import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerId: number;

    @Column()
    orderNumber: number;

    @Column()
    paymentId: number;

    @Column()
    orderDate: Date;

    @Column()
    shipDate: number;

    @Column()
    requiredDate: Date;

    @Column()
    shipperId: number;

    @Column()
    freight: string;

    @Column()
    salesTax: number;
    
    @Column()
    timestamp: string;

    @Column()
    transactStatus: string;

    @Column()
    errLoc: string;

    @Column()
    fulfilled: string;

    @Column()
    deleted: Date;

    @Column()
    paid: number;

    @Column()
    paymentDate: Date;

}
