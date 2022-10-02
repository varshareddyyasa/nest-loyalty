import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Promotions } from "../promotions/promotions.entity";
import { User } from "../user/user.entity";
import { VendorLocation } from "../vendorLocation/vendorLocation.entity";

@Entity()
export class Transaction{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User)
    user: User

    @Column()
    @IsNotEmpty()
    @RelationId((up: Transaction) => up.user)
    userId: number;

    @ManyToOne(type => VendorLocation)
    vendorLocation: VendorLocation

    @Column()
    @IsNotEmpty()
    @RelationId((up: Transaction) => up.vendorLocation)
    vendorLocationId: number;
    
    @Column()
    @IsNotEmpty()
    purchaseAmount: number

    @Column()
    @IsNotEmpty()
    Date: Date

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}