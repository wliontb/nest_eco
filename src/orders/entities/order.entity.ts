import { Customer } from "src/customers/entities/customer.entity";
import { Orderdetail } from "src/orderdetails/entities/orderdetail.entity";
import { Payment } from "src/payment/entities/payment.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderNumber: number;

    @Column()
    orderDate: Date;

    @Column()
    requiredDate: Date;
    
    @Column()
    timestamp: string;

    @Column()
    transactStatus: string;

    @Column({
        default: false
    })
    fulfilled: boolean;

    @Column({
        default: false
    })
    deleted: boolean;

    @Column()
    paid: number;

    @Column()
    paymentDate: Date;

    @OneToMany(() => Orderdetail, (orderdetail) => orderdetail.order)
    orderDetails: Orderdetail[]

    @OneToOne(() => Customer)
    @JoinColumn()
    customer: Customer;
    
    @OneToOne(() => Payment)
    @JoinColumn()
    payment: Payment
}
