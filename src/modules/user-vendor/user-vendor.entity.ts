import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, Unique, UpdateDateColumn } from "typeorm";
import { User } from '../user/user.entity';
import { Vendor } from '../vendor/vendor.entity';

@Entity()
@Unique('user-vendor-unique-key', ['user', 'vendor'])
export class UserVendor {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.userVendors)
    user: User

    @Column()
    @IsNotEmpty()
    @RelationId((uv: UserVendor) => uv.user)
    userId: number

    @ManyToOne(() => Vendor, (vendor) => vendor.userVendors)
    vendor: Vendor

    @Column()
    @IsNotEmpty()
    @RelationId((uv: UserVendor) => uv.vendor)
    vendorId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}