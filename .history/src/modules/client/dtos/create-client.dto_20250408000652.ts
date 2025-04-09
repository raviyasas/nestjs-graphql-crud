import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateClientDto{

    @Notnu
    clientName: string;

    clientCode: string;

    clientDescription: string;

    isActive: boolean;

    createdBy: string;
}