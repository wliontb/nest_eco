import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Shipper {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    phone: string;
}
