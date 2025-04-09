import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export abstract class BaseModel{

    // @Field(()=> ID)
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    createdAt?: string;

    @Field({nullable: true})
    @Column({
        name: 'created_by',
        nullable: true,
        type:'uuid'
    })
    createdBy: string;

    @Field()
    @CreateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    updatedAt?: string

    @Field({nullable: true})
    @Column({
        name: 'updated_by',
        nullable: true,
        type:'uuid'
    })
    updatedBy: string;

}