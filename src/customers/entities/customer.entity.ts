import CustomBaseEntity from "src/database/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address1: string;

    @Column()
    address2: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    avatar: string;

    @Column({
        default: 0
    })
    jcoin: number;

    @Column()
    password: string;

    @Column({
        default: true
    })
    active: boolean;
}
