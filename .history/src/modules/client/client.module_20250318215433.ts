import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./models/client.model";
import { DBS } from "src/config/database/postgres.db.connection";

@Module({
    imports:[TypeOrmModule.forFeature([Client], DBS.CLIENT)],
    providers:[
        {
            provide: Cli
        }
    ],
    exports:[]
})

export class ClientModule{}