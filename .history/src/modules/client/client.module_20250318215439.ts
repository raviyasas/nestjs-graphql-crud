import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./models/client.model";
import { DBS } from "src/config/database/postgres.db.connection";
import { ClientRepositoryInterface } from "./repositories/client.repository.interface";

@Module({
    imports:[TypeOrmModule.forFeature([Client], DBS.CLIENT)],
    providers:[
        {
            provide: ClientRepositoryInterface
            
        }
    ],
    exports:[]
})

export class ClientModule{}