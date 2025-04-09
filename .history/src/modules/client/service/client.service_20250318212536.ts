import { Injectable, Logger } from "@nestjs/common";
import { ClientServiceInterace } from "./client.service.interface";
import { Client } from "../models/client.model";
import { ClientRepositoryInterface } from "../repositories/client.repository.interface";

@Injectable()
export class ClientService implements ClientServiceInterace{

    constructor(private readonly clientRepository: ClientRepositoryInterface){
        super(
            new Logger(ClientService.name),
            clientRepository,
            Client.name
        );
    }

    getClients(): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }
}