import { Customer } from "src/customers/entities/customer.entity";
import { GoodsCategory } from "src/goods-category/entities/goods-category.entity";
import { Payment } from "src/payment/entities/payment.entity";
import { Column, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 40
    })
    companyName: string;

    @Column({
        length: 30
    })
    contactFname: string;

    @Column({
        length: 50
    })
    contactLName: string;

    @Column({
        length: 30
    })
    contactTitle: string;

    @Column({
        length: 60
    })
    address1: string;

    @Column({
        length: 50
    })
    address2: string;

    @Column({
        length: 15
    })
    city: string;

    @Column({
        length: 25
    })
    state: string;

    @Column({
        length: 15
    })
    postalCode: string;

    @Column({
        length: 50
    })
    country: string;

    @Column({
        length: 25
    })
    phone: string;

    @Column({
        length: 25
    })
    fax: string;

    @Column({
        length: 75
    })
    email: string;

    @Column({
        length: 100
    })
    url: string;

    @Column({
        length: 100
    })
    discountType: string;

    @Column()
    discountRate: number;

    @Column({
        default: false
    })
    discountAvailable: boolean;

    @Column({
        default: false
    })
    currentOrder: boolean;

    @Column({
        length: 100
    })
    sizeURL: string;

    @Column({
        length: 75
    })
    logo: string;

    @Column()
    ranking: number;

    @Column({
        length: 255
    })
    notes: string;

    @OneToMany(() => GoodsCategory, (goodcategory) => goodcategory.supplier)
    @JoinColumn()
    goodCategories: GoodsCategory[];

    @OneToOne(() => Customer)
    @JoinColumn()
    customer: Customer;

    @OneToMany(() => Payment, (payment) => payment.supplier)
    @JoinColumn()
    payments: Payment[];
}
