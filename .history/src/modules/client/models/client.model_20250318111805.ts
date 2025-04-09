import { Field } from "@nestjs/graphql";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { BaseModel } from "src/config/models/base.model";

export class Client extends BaseModel{

    @Field()
    @ColdObservable
    clientName: string;
}