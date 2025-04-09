import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/config/models/base.model";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity('client')
export class Client extends BaseModel{

    @Field()
    @Column({
        name: 'clientName',
        type:'text',
        nullable: false
    })
    clientName: string;

    @Field()
    @Column({
        name: 'clientCode',
        type:'text',
        nullable: false
    })
    clientCode: string;

    @Field({nullable: true})
    @Column({
        name: 'clientDescription',
        type:'text',
        nullable: true
    })
    clientDescription: string;
    
}