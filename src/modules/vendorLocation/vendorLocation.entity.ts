import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Vendor } from "../vendor/vendor.entity";


@Entity()
export class VendorLocation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Vendor)
    vendor: Vendor

    @Column()
    @IsNotEmpty()
    @RelationId((vl: VendorLocation) => vl.vendor)
    vendorId: number;

    @Column()
    @IsNotEmpty()
    address: string;

    @Column()
    @IsNotEmpty()
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}