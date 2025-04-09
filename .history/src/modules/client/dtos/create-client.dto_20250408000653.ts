import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateClientDto{

    @Notnull
    clientName: string;

    clientCode: string;

    clientDescription: string;

    isActive: boolean;

    createdBy: string;
}