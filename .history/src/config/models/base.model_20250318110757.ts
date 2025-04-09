import { Field, ObjectType } from "@nestjs/graphql";
import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export abstract class BaseModel{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Field()
    @CreateDateColumn({
        type: 'timestamp',
        name: 'createdAt',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    createdAt?: string;

    createdBy: ExecFileSyncOptionsWithBufferEncoding;

    @Field()
    @CreateDateColumn({
        type: 'timestamp',
        name: 'updatedAt',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    updatedAt?: string

}