import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateClientDto{

    @IsNotEmpty()
    @Field
    clientName: string;

    clientCode: string;

    clientDescription: string;

    isActive: boolean;

    createdBy: string;
}