import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseDto{
    @Field()
    id?: string;

    @Field()
    da

    @Field()
    message?: string;

    @Field()
    success?: boolean;
}