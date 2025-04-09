import { BaseRepository } from "src/common/repositories/base.repository";
import { Client } from "../models/client.model";
import { ResponseDto } from "src/common/dtos/response.dto";
import { UpdateClientDto } from "../dtos/update-client.dto";

export abstract class ClientRepositoryInterface extends BaseRepository<Client> {

    abstract createClient(client: Client): Promise<ResponseDto>;
    abstract getClient(clientId: string): Promise<ResponseDto>;
    abstract getClients(): Promise<ResponseDto[]>;
    abstract updateClient(dto: UpdateClientDto): Promise<ResponseDto>;
    abstract deleteClient(clientId: string): Promise<void>;
}