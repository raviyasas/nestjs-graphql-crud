import { BaseRepository } from "src/config/repositories/base.repository";
import { Client } from "../models/client.model";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DBS } from "src/config/database/postgres.db.connection";
import { privateDecrypt } from "crypto";

@Injectable()
export class ClientRepository extends BaseRepository<Client>{

    constructor(
        @InjectRepository(Client, DBS.CLIENT)
        private 
    )
}