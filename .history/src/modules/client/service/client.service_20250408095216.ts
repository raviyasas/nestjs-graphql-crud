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

    async createClient(client: Client): Promise<ResponseDto> {
        this.logger.log(this.createClient.name);
        return await this.clientRepository.createClient(c);
    }

    async getClient(clientId: string): Promise<Client> {
        this.logger.log(this.getClient.name);
        return await this.clientRepository.getClient(clientId);
    }

    async updateClient(dto: UpdateClientDto): Promise<ResponseDto> {
        this.logger.log(this.updateClient.name);
        return await this.clientRepository.updateClient(dto);
    }

    async deleteClient(clientId: string): Promise<void> {
        this.logger.log(this.deleteClient.name);
        return await this.clientRepository.deleteClient(clientId);
    }

    async getClients(): Promise<Client[]> {
        this.logger.log(this.getClients.name);
        return await this.clientRepository.getClients();
    }

}