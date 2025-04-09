import { InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateClientDto{

    @IsNotEmpty()
    @Fie
    clientName: string;

    clientCode: string;

    clientDescription: string;

    isActive: boolean;

    createdBy: string;
}