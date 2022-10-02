import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    firstName: string;
    
    @Column()
    @IsNotEmpty()
    lastName: string;

    @Column()
    @IsNotEmpty()
    phone: string;

    @Column()
    emailId: string;

    @Column()
    address: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}