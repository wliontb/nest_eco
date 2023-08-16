import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paymentType: string;

    @Column({
        default: false
    })
    allowed: boolean;

    @ManyToOne(() => Supplier, (supplier) => supplier.payments)
    @JoinColumn()
    supplier: Supplier
}
