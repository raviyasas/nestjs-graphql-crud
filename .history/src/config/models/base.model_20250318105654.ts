import { Field, ObjectType } from "@nestjs/graphql";
import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export abstract class BaseModel{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @CreateDateColumn({
        type: 'timestamptz',
        name: 'createdAt',
        default: () => 'Current'
    })
    createdAt?: string
}