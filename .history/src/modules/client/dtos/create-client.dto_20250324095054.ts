import { NoSpecialCharacters } from "src/common/decorators/special-characters.decorator";

export class createClientDto{

    @NoSpecialCharacters()
    clientName: string;

    
    clientDescription: string;
}