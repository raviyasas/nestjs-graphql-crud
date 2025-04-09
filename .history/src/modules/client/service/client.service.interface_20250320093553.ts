import { Client } from "../models/client.model";

export abstract class ClientServiceInterface{

    abstract getClients(): Promise<Client[]>;
    abstract findAll()L 
}