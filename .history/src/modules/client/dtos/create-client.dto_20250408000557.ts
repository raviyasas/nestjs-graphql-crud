import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateClientDto{

    clientName: string
}