import { Injectable, Logger } from "@nestjs/common";
import { ClientServiceInterface } from "./client.service.interface";
import { Client } from "../models/client.model";
import { ClientRepositoryInterface } from "../repositories/client.repository.interface";

@Injectable()
export class ClientService implements Clien{

    constructor(private readonly clientRepository: ClientServiceInterface){
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