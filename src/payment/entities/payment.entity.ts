import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paymentType: string;

    @Column()
    allowed: boolean;
}
