import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateClientDto{

    @IsNotEmpty()
    @Field()
    clientName: string;

    @IsNotEmpty()
    @Field()
    clientCode: string;

    @Field()
    clientDescription: string;

    @I
    @Field()
    isActive: boolean;

    createdBy: string;
}