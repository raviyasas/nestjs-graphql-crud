import { BaseRepository } from "src/common/repositories/base.repository";
import { Client } from "../models/client.model";
import { ResponseDto } from "src/common/dtos/response.dto";
import { CreateClientDto } from "../dtos/create-client.dto";
import { UpdateClientDto } from "../dtos/update-client.dto";

export abstract class ClientRepositoryInterface extends BaseRepository<Client>{

    abstract getClients(): Promise<Client[]>;
    abstract createClient(dto: CreateClientDto): Promise<ResponseDto>;
        abstract getClient(clientId: string): Promise<Client>;
        abstract getClients(): Promise<Client[]>;
        abstract updateClient(dto: UpdateClientDto): Promise<ResponseDto>;
        abstract deleteClient(clientId: string): Promise<void>;
}