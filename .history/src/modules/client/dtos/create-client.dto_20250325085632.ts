import { IsNotEmpty, IsUUID, Matches } from "class-validator";
import { NoSpecialCharacters } from "src/common/decorators/special-characters.decorator";

export class createClientDto{

    @IsNotEmpty()
    @NoSpecialCharacters({message: 'No special charaters are allowed'})
    clientName: string;

    @NoSpecialCharacters({message: 'No special charaters are allowed'})
    clientDescription: string;

    @IsUUID()
    ())
    clientCode: string;
}