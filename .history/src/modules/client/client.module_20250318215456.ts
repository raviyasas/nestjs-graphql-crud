import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./models/client.model";
import { DBS } from "src/config/database/postgres.db.connection";
import { ClientRepositoryInterface } from "./repositories/client.repository.interface";
import { ClientRepository } from "./repositories/client.repository";

@Module({
    imports:[TypeOrmModule.forFeature([Client], DBS.CLIENT)],
    providers:[
        {
            provide: ClientRepositoryInterface,
            useClass: ClientRepository
        },
        {
            provide: cliser
        }
    ],
    exports:[]
})

export class ClientModule{}