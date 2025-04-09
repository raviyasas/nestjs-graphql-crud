import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType({isAbstract})
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
}