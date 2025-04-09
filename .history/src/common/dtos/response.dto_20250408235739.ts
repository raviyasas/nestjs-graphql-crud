import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseDto{
    @Field()
    id?: string;
    message?: string;
    success?: boolean;
}