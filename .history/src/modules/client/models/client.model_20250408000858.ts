import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity('client')
export class Client extends BaseModel{

    @Field({nullable: false})
    @Column({
        name: 'client_name',
        type:'text',
        nullable: false
    })
    client_name: string;

    @Field({nullable: false})
    @Column({
        name: 'client_code',
        type:'text',
        nullable: fail
    })
    client_code: string;

    @Field({nullable: true})
    @Column({
        name: 'client_description',
        type:'text',
        nullable: true
    })
    client_description: string;

    @Field()
    @Column({
        name: 'is_active',
        type:'boolean',
    })
    is_active: boolean;
}