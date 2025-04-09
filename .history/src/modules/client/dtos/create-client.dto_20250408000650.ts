import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateClientDto{

    @No
    clientName: string;

    clientCode: string;

    clientDescription: string;

    isActive: boolean;

    createdBy: string;
}