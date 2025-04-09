import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsBoolean } from "class-validator";

@InputType()
export class UpdateClientDto ex {

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