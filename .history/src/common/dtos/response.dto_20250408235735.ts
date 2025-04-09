import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseDto{
    
    id?: string;
    message?: string;
    success?: boolean;
}