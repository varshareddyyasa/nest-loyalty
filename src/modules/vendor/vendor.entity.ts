import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { UserVendor } from '../user-vendor/user-vendor.entity';

@Entity()
export class Vendor{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;
    

    @Column()
    @IsNotEmpty()
    pointsEarningRatio: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => UserVendor, (uv) => uv.vendor)
    userVendors: UserVendor[]
}