import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
