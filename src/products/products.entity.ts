import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('products')
export class Product{
    @PrimaryColumn()
    id: number;

    @Column({length: 40})
    title?: string

    @Column({length: 100, nullable:true})
    description: string

    @Column()
    price : number;

    

}

