import { Injectable, Logger } from "@nestjs/common";
import { ClientServiceInterace } from "./client.service.interface";
import { Client } from "../models/client.model";

@Injectable()
export class ClientService implements ClientServiceInterace{

    constructor(private readonly clientRepository: ){
        super(
            new Logger(ClientService.name)
            clientRepository,
            
        )
    }

    getClients(): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }
}