import { Field } from "@nestjs/graphql";
import { BaseModel } from "src/config/models/base.model";

export class Client extends BaseModel{

    @Field()
}