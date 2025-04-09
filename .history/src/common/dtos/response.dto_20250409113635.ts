import { Field, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";

@ObjectType()
export class ResponseDto{
    @Field({nullable: true})
    id?: string;

    @Field(() => GraphQLJSON, { nullable: true })
    data?: Record<string, any>;

    @Field()
    message?: string;

    @Field({defaultValue})
    success?: boolean;
}