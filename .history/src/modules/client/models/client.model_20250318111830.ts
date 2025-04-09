import { Field } from "@nestjs/graphql";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { BaseModel } from "src/config/models/base.model";
import { Column } from "typeorm";

export class Client extends BaseModel{

    @Field()
    @Column({
        name: 'clientName',
        type:'text',
        nu
    })
    clientName: string;
}