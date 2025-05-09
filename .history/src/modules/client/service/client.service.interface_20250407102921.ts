import { ResponseDto } from "src/common/dtos/response.dto";
import { Client } from "../models/client.model";
import { CreateClientDto } from "../dtos/create-client.dto";

export abstract class ClientServiceInterface{

    abstract getClients(): Promise<Client[]>;
    abstract getClient(): Promise<Client>;
    abstract createClient(dto: CreateClientDto): Promise<ResponseDto>;
    abstract updateClient(dto: UpdateC): Promise<ResponseDto>;
    abstract deleteClient(): Promise<void>;
}