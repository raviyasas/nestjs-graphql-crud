import { Field } from "@nestjs/graphql";
import { BaseModel } from "src/config/models/base.model";
import { Column } from "typeorm";

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
        name: 'clientDescription',
        type:'text',
        nullable: false
    })
    clientDescription: string;
}