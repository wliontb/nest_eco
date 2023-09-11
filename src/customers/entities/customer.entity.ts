import CustomBaseEntity from "src/database/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    firstName: string;

    @Column({
        nullable: true
    })
    lastName: string;

    @Column({
        nullable: true
    })
    address1: string;

    @Column({
        nullable: true
    })
    address2: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column({
        nullable: true
    })
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
