import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType({ isAbstract: true })
export abstract class BaseModel {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    createdAt?: Date;

    @Field({ nullable: true })
    @Column({
        name: 'created_by',
        nullable: true,
        type: 'uuid'
    })
    createdBy?: string;


    @Field({ nullable: true })
    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    updatedAt?: Date;

    @Field({ nullable: true })
    @Column({
        name: 'updated_by',
        nullable: true,
        type: 'uuid'
    })
    updatedBy?: string;

    @Field({ nullable: true })
    @Del({
        name: 'deleted_at',
        nullable: true,
        type: 'timestamp',
    })
    deletedAt?: Date;

    @Field({ nullable: true })
    @Column({
        name: 'deleted_by',
        nullable: true,
        type: 'uuid',
    })
    deletedBy?: string;

}