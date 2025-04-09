import { Field, InputType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { CreateClientDto } from "./create-client.dto";

@InputType()
export class UpdateClientDto extends PartialType(CreateClientDto) {

    @IsNotEmpty()
    @Field()
    id: string;

    clientName: string;
    clientCode: string;
    clientDescription: string;
    cli

}