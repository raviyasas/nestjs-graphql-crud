import { Field, InputType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsBoolean } from "class-validator";
import { CreateClientDto } from "./create-client.dto";

@InputType()
export class UpdateClientDto extends PartialType(CreateClientDto) {

    @IsNotEmpty()
    @Field()
    clientName: string;

    @IsNotEmpty()
    @Field()
    clientCode: string;

    @Field()
    clientDescription: string;

    @IsBoolean()
    @Field()
    isActive: boolean;
}