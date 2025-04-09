import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseDto{
    @Fei
    id?: string;
    message?: string;
    success?: boolean;
}