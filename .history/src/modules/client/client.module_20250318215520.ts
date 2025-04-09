import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./models/client.model";
import { DBS } from "src/config/database/postgres.db.connection";
import { ClientRepositoryInterface } from "./repositories/client.repository.interface";
import { ClientRepository } from "./repositories/client.repository";
import { ClientServiceInterface } from "./service/client.service.interface";
import { ClientService } from "./service/client.service";

@Module({
    imports:[TypeOrmModule.forFeature([Client], DBS.CLIENT)],
    providers:[
        {
            provide: ClientRepositoryInterface,
            useClass: ClientRepository
        },
        {
            provide: ClientServiceInterface,
            useClass: ClientService
        }
    ],
    exports:[ClientServiceInterface]
})

export class ClientModule{}