import { ResponseDto } from "src/common/dtos/response.dto";
import { Client } from "../models/client.model";

export abstract class ClientServiceInterface{

    abstract getClients(): Promise<Client[]>;
    abstract getClient(): Promise<Client>;
    abstract createClient(dto:): Promise<ResponseDto>;
    abstract updateClient(): Promise<ResponseDto>;
    abstract deleteClient(): Promise<void>;
}