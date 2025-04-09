import { BaseRepository } from "src/common/repositories/base.repository";
import { Client } from "../models/client.model";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DBS } from "src/config/database/postgres.db.connection";
import { Repository } from "typeorm";
import { ClientRepositoryInterface } from "./client.repository.interface";
import { ResponseDto } from "src/common/dtos/response.dto";

@Injectable()
export class ClientRepository extends BaseRepository<Client> implements ClientRepositoryInterface {

    constructor(
        @InjectRepository(Client, DBS.CLIENT)
        private readonly clientRepository: Repository<Client>,
    ) {
        super(new Logger(ClientRepository.name), clientRepository)
    }

    async createClient(client: Client): Promise<Client> {
        try {
            const result = await this.clientRepository.save(client);
            return {
                id: result.id,
                data:result,
                message: 'Client created successlly',
                success: true
            }

        } catch (error) {
            console.error(`FCannot create a new client ${error.message}`);
            throw error;
        }
    }

    async getClient(clientId: string): Promise<Client> {
        try {
            const result = await this.clientRepository.findOne({
                where: {
                    id: clientId
                }
            });

            console.log(result)

            return {
                id: result.id,
                data: result,
                message: 'Client retrived successlly',
                success: true
            }
        } catch (error) {
            console.error(`Failed to retrive a client: ${error.message}`);
            throw error;
        }
    }

    async getClients(): Promise<Client[]> {
        try {
            const result = await this.clientRepository.find();

            return {
                id: null,
                data: result,
                message: 'Client list retrived successfully',
                success: true
            };
        } catch (error) {
            console.error(`Failed to retrive clients: ${error.message}`);
            throw error;
        }
    }

    async updateClient(client: Client): Promise<Client> {

        try {
            const result = await this.clientRepository.save(client);
            return {
                id: result.id,
                data: result,
                message: 'Client updated successfully',
                success: true
            };
        } catch (error) {
            console.error(`Failed to update the client: ${error.message}`);
            throw error;
        }
    }

    async deleteClient(clientId: string): Promise<void> {

        try {
            const client = await this.clientRepository.findOne({
                where: {
                    id: clientId
                }
            });

            if (!client) {
                throw new Error(`Client with ID ${clientId} not found`);
            }

            const result = await this.clientRepository.softRemove(client);

            return {
                id: result.id,
                message: 'Client deleted successfully',
                success: true
            };
        } catch (error) {
            console.error(`Failed to delete client: ${error.message}`);
            throw error;
        }
    }
}