import { Field, InputType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsBoolean } from "class-validator";

@InputType()
export class UpdateClientDto extends PartialType(Crete) {

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