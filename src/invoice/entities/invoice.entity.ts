import CustomBaseEntity from "src/database/entities/base.entity";
import { InvoiceChild } from "src/invoice_child/entities/invoice_child.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum InvoiceStatus {
    PENDING = 1,
    APPROVE = 2,
    REJECT = 0
}

@Entity()
export class Invoice extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    phone: number;

    @Column()
    nation: string;
    
    @Column()
    city: string;

    @Column()
    district: string;

    @Column()
    address: string;

    @Column({
        default: 1
    })
    shipping: number;

    @Column({
        default: 1
    })
    payment: number;

    @OneToMany(() => InvoiceChild, (invoiceChild) => invoiceChild.Invoice)
    @JoinColumn()
    invoiceChild: InvoiceChild[]

    @Column()
    total: number;

    @Column({
        type: 'enum',
        enum: InvoiceStatus,
        default: InvoiceStatus.PENDING
    })
    status: InvoiceStatus;

}
