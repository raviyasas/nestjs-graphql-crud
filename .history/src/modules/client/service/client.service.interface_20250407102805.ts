import { ResponseDto } from "src/common/dtos/response.dto";
import { Client } from "../models/client.model";

export abstract class ClientServiceInterface{

    abstract getClients(): Promise<Client[]>;
    abstract getClient(): Promise<Cl
    abstract createClient(): Promise<ResponseDto>;
}