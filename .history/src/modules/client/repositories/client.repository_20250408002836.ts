import { BaseRepository } from "src/common/repositories/base.repository";
import { Client } from "../models/client.model";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DBS } from "src/config/database/postgres.db.connection";
import { Repository } from "typeorm";
import { ClientRepositoryInterface } from "./client.repository.interface";
import { ResponseDto } from "src/common/dtos/response.dto";
import { CreateClientDto } from "../dtos/create-client.dto";
import { UpdateClientDto } from "../dtos/update-client.dto";

@Injectable()
export class ClientRepository extends BaseRepository<Client> implements ClientRepositoryInterface {

    constructor(
        @InjectRepository(Client, DBS.CLIENT)
        private readonly clientRepository: Repository<Client>,
    ) {
        super(new Logger(ClientRepository.name), clientRepository)
    }

    async createClient(dto: CreateClientDto): Promise<ResponseDto> {
        throw new Error("Method not implemented.");
    }

    async getClient(clientId: string): Promise<Client> {
        const result = await this.clientRepository.findOne({
            where: {
                id: clientId
            }
        });
        return result;
    }

    async getClients(): Promise<Client[]> {
        const result = await this.clientRepository.find();
        return result || [];
    }

    async updateClient(dto: UpdateClientDto): Promise<ResponseDto> {
        throw new Error("Method not implemented.");
    }

    async deleteClient(clientId: string): Promise<void> {

        tr

        const client = await this.clientRepository.findOne({
            where: {
                id: clientId
            }
        });

        if (!client) {
            throw new Error(`Client with ID ${clientId} not found`);
        } 

        await this.clientRepository.softRemove(client);
    }


}