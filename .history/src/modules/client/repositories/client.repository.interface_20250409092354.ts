import { BaseRepository } from "src/common/repositories/base.repository";
import { Client } from "../models/client.model";
import { ResponseDto } from "src/common/dtos/response.dto";

export abstract class ClientRepositoryInterface extends BaseRepository<Client> {

    abstract createClient(client: Client): Promise<Client>;
    abstract getClient(clientId: string): Promise<Client>;
    abstract getClients(): Promise<Client[]>;
    abstract updateClient(client: Client): Promise<Cli>;
    abstract deleteClient(clientId: string): Promise<ResponseDto>;
}