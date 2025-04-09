import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty } from "class-validator";

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

    @IsBoolean
    @Field()
    isActive: boolean;

    createdBy: string;
}