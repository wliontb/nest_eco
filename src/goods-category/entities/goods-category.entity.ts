import { Category } from "src/category/entities/category.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class GoodsCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    goodName: string;

    @Column()
    description: string;

    @OneToMany(() => Category, (category) => category.goodCategory)
    @JoinColumn()
    categories: Category[]

    @ManyToOne(() => Supplier, (supplier) => supplier.goodCategories)
    @JoinColumn()
    supplier: Supplier
}
