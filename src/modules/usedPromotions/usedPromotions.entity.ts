import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { Promotions } from "../promotions/promotions.entity";
import { User } from "../user/user.entity";
import { VendorLocation } from "../vendorLocation/vendorLocation.entity";

@Entity()
export class UsedPromotions{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User)
    user: User

    @Column()
    @RelationId((up: UsedPromotions) => up.user)
    userId: number;

    @ManyToOne(type => Promotions)
    promotion: Promotions

    @Column()
    @RelationId((up: UsedPromotions) => up.promotion)
    promotionId: number;

    @ManyToOne(type => VendorLocation)
    vendorLocation: VendorLocation

    @Column()
    @RelationId((up: UsedPromotions) => up.vendorLocation)
    vendorLocationId: number;
    
    @Column()
    @IsNotEmpty()
    Date: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}