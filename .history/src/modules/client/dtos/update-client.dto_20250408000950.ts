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