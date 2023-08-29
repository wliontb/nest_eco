import CustomBaseEntity from "src/database/entities/base.entity";
import { GoodsCategory } from "src/goods-category/entities/goods-category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category extends CustomBaseEntity{
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
        default: true
    })
    active: boolean

    @ManyToOne(() => GoodsCategory, (goodcategory) => goodcategory.categories)
    @JoinColumn()
    goodCategory: GoodsCategory
}
