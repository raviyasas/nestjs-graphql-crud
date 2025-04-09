import { Field, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";

@ObjectType()
export class ResponseDto{
    @Field()
    id?: string;

    @Field(() => GraphQLJSON, { nullable: true })
    data?: any;

    @Field()
    message?: string;

    @Field()
    success?: boolean;
}