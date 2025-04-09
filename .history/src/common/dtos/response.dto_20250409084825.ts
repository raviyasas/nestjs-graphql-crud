import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseDto{
    @Field()
    id?: string;

    @F

    @Field()
    message?: string;

    @Field()
    success?: boolean;
}