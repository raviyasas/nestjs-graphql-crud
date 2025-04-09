import { BaseRepository } from "src/config/repositories/base.repository";
import { Client } from "../models/client.model";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DBS } from "src/config/database/postgres.db.connection";
import { Repository } from "typeorm";

@Injectable()
export class ClientRepository extends BaseRepository<Client>{

    constructor(
        @InjectRepository(Client, DBS.CLIENT)
        private readonly clientRepository: Repository<Client>,
    ){
        super(new Logger(ClientRepository.name), clientRepository)
    }

    async getClients(): Promise<Client[]>{
        return await this.clientRepository.find()
    }
}