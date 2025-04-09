import { ResponseDto } from "src/common/dtos/response.dto";
import { Client } from "../models/client.model";
import { CreateClientDto } from "../dtos/create-client.dto";
import { UpdateClientDto } from "../dtos/update-client.dto";

export abstract class ClientServiceInterface{

    abstract createClient(dto: CreateClientDto): Promise<ResponseDto>;
    abstract getClient(clientId: string): Promise<ResponseDto>;
    abstract getClients(): Promise<ResponseDto>;
    abstract updateClient(dto: UpdateClientDto): Promise<ResponseDto>;
    abstract deleteClient(clientId: string): Promise<ResponseDto>;
}