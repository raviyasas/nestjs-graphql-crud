import { BaseRepository } from "src/common/repositories/base.repository";
import { Client } from "../models/client.model";

export abstract class ClientRepositoryInterface extends BaseRepository<Client>{

    abstract getClients(): Promise<Client[]>;
    abstract createClient(dto: CreateClientDto): Promise<ResponseDto>;
        abstract getClient(clientId: string): Promise<Client>;
        abstract getClients(): Promise<Client[]>;
        abstract updateClient(dto: UpdateClientDto): Promise<ResponseDto>;
        abstract deleteClient(clientId: string): Promise<void>;
}