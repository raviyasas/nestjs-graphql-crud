import { IsNotEmpty, IsUUID } from "class-validator";
import { NoSpecialCharacters } from "src/common/decorators/special-characters.decorator";

export class createClientDto{

    @IsNotEmpty()
    @NoSpecialCharacters()
    clientName: string;

    @NoSpecialCharacters({message: No speacial charac})
    clientDescription: string;

    @IsUUID()
    clientCode: string;
}