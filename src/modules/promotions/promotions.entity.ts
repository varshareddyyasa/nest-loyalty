import { isNotEmpty, IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Vendor } from "../vendor/vendor.entity";


@Entity()
export class Promotions {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Vendor)
    vendor: Vendor

    @Column()
    @RelationId((vl: Promotions) => vl.vendor)
    vendorId: number;

    @Column()
    @IsNotEmpty()
    pointsNeeded: number;

    @Column()
    @IsNotEmpty()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}