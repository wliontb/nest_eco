import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    contactFname: string;

    @Column()
    contactLName: string;

    @Column()
    contactTitle: string;

    @Column()
    address1: string;

    @Column()
    address2: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    postalCode: string;

    @Column()
    country: string;

    @Column()
    phone: string;

    @Column()
    fax: string;

    @Column()
    email: string;

    @Column()
    url: string;

    @Column()
    paymentMethods: string;

    @Column()
    discountType: number;

    @Column()
    typeGoods: number;

    @Column()
    notes: string;

    @Column()
    discountAvailable: boolean;

    @Column()
    currentOrder: string;

    @Column()
    logo: string;

    @Column()
    customerId: number;

    @Column()
    sizeURL: string;
}
