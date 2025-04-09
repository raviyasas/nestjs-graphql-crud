import { ResponseDto } from "src/common/dtos/response.dto";
import { Client } from "../models/client.model";

export abstract class ClientServiceInterface{

    abstract getClients(): Promise<Client[]>;
    abstract
    abstract createClient(): Promise<ResponseDto>;
}