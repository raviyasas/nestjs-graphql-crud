import { Injectable, Logger } from "@nestjs/common";
import { ClientServiceInterface } from "./client.service.interface";
import { Client } from "../models/client.model";
import { ClientRepositoryInterface } from "../repositories/client.repository.interface";
import { BaseService } from "src/common/services/base.service";
import { ResponseDto } from "src/common/dtos/response.dto";
import { CreateClientDto } from "../dtos/create-client.dto";
import { UpdateClientDto } from "../dtos/update-client.dto";

@Injectable()
export class ClientService extends BaseService<Client> implements ClientServiceInterface{

    constructor(private readonly clientRepository: ClientRepositoryInterface){
        super(
            new Logger(ClientService.name),
            clientRepository,
        );
    }
    createClient(dto: CreateClientDto): Promise<ResponseDto> {
        throw new Error("Method not implemented.");
    }
    getClient(clientId: string): Promise<Client> {
        throw new Error("Method not implemented.");
    }
    updateClient(dto: UpdateClientDto): Promise<ResponseDto> {
        throw new Error("Method not implemented.");
    }
    deleteClient(clientId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async getClients(): Promise<Client[]> {
        this.logger.log(this..name);
        return await this.clientRepository.getClients();
    }

}