import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/config/models/base.model";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity('client')
export class Client extends BaseModel{

    @Field()
    @Column({
        name: 'client_name',
        type:'text',
        nullable: true
    })
    clientName: string;

    @Field()
    @Column({
        name: 'client_code',
        type:'text',
        nullable: true
    })
    clientCode: string;

    @Field({nullable: true})
    @Column({
        name: 'client_description',
        type:'text',
        nullable: true
    })
    clientDescription: string;

    @Field()
    @Column({
        name: 'is_active',
        type:'boolean',
        nullable: true
    })
    isActive: boolean;
}