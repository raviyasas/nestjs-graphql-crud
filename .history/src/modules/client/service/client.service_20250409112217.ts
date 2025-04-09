import { Injectable, Logger } from "@nestjs/common";
import { ClientServiceInterface } from "./client.service.interface";
import { Client } from "../models/client.model";
import { ClientRepositoryInterface } from "../repositories/client.repository.interface";
import { BaseService } from "src/common/services/base.service";
import { ResponseDto } from "src/common/dtos/response.dto";
import { CreateClientDto } from "../dtos/create-client.dto";
import { UpdateClientDto } from "../dtos/update-client.dto";

@Injectable()
export class ClientService extends BaseService<Client> implements ClientServiceInterface {

    constructor(private readonly clientRepository: ClientRepositoryInterface) {
        super(
            new Logger(ClientService.name),
            clientRepository,
        );
    }

    async createClient(dto: CreateClientDto): Promise<ResponseDto> {
        this.logger.log(this.createClient.name);

        const client: Client = {
            ...dto,
            createdBy: dto.clientCreatedBy,
            updatedBy: dto.clientCreatedBy,
        }
        const newClient = await this.clientRepository.createClient(client);

        return {
            id: newClient.id,
            data: newClient,
            message: 'Client created successfully',
            success: true
        }
    }

    async getClient(clientId: string): Promise<ResponseDto> {
        this.logger.log(this.getClient.name);
        const client = await this.clientRepository.getClient(clientId);

        if(!client)
        return {
            id: client.id,
            data: client,
            message: 'Client retrieved successfully',
            success: true
        }
    }

    async getClients(): Promise<ResponseDto> {
        this.logger.log(this.getClients.name);
        const clients = await this.clientRepository.getClients();

        return {
            id: null,
            data: clients,
            message: 'Client list retrieved successfully',
            success: true
        };
    }

    async updateClient(dto: UpdateClientDto): Promise<ResponseDto> {
        this.logger.log(this.updateClient.name);

        const existingClient = await this.clientRepository.getClient(dto.id);

        if (!existingClient) {
            return {
                id: dto.id,
                data: null,
                message: 'Client not found',
                success: false
            };
        }

        const updatedClient = Object.assign(existingClient, dto);
        const client = await this.clientRepository.updateClient(updatedClient);

        return {
            id: client?.id,
            data: client,
            message: 'Client updated successfully',
            success: true
        };

    }

    async deleteClient(clientId: string): Promise<ResponseDto> {
        this.logger.log(this.deleteClient.name);
        await this.clientRepository.deleteClient(clientId);
        return {
            id: clientId,
            data: null,
            message: 'Client deleted successfully',
            success: true
        };
    }

}