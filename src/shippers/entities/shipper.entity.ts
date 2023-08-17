import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shipper {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    phone: string;
}
