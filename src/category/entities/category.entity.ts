import { GoodsCategory } from "src/goods-category/entities/goods-category.entity";
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    categoryName: string;

    @Column({
        length: 600
    })
    description: string;

    @Column({
        length: 255
    })
    picture: string;

    @Column({
        default: false
    })
    active: boolean;

    @ManyToOne(() => GoodsCategory, (goodcategory) => goodcategory.categories)
    @JoinColumn()
    goodCategory: GoodsCategory
}
