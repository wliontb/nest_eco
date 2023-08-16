import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/products/entities/product.entity";
import { Shipper } from "src/shippers/entities/shipper.entity";
import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Orderdetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    discount: number;

    @Column()
    total: number;

    @Column({
        length: 50
    })
    size: string;

    @Column({
        length: 50
    })
    color: string;

    @Column({
        default: false
    })
    fulfilled: boolean;

    @Column()
    billDate: Date;

    @Column()
    shipDate: Date;

    @Column()
    freight: number

    @Column()
    salesTax: number;

    @ManyToOne(() => Order, (order) => order.orderDetails)
    @JoinColumn()
    order: Order

    @OneToOne(() => Shipper)
    @JoinColumn()
    shipper: Shipper

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product
}
