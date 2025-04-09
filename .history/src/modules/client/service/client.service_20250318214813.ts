import { Injectable, Logger } from "@nestjs/common";
import { ClientServiceInterface } from "./client.service.interface";
import { Client } from "../models/client.model";
import { ClientRepositoryInterface } from "../repositories/client.repository.interface";
import { BaseService } from "src/config/services/base.service";

@Injectable()
export class ClientService extends BaseService implements ClientServiceInterface{

    constructor(private readonly clientRepository: ClientRepositoryInterface){
        super(
            new Logger(ClientService.name),
            clientRepository,
            Client.name
        );
    }

    async getClients(): Promise<Client[]> {
        this.lo
        return await this.clientRepository.getClients();
    }
}