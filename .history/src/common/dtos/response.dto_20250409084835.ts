import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseDto{
    @Field()
    id?: string;

    @Field()
    data?: any;

    @Field()
    message?: string;

    @Field()
    success?: boolean;
}