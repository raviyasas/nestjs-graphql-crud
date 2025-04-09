import { Field } from "@nestjs/graphql";
import { IsNotEmpty, IsBoolean } from "class-validator";

export class UpdateClientDto{

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