import { Client } from "../models/client.model";

export abstract class ClientServiceInterace{

    abstract getClients(): Promise<Client[]
}