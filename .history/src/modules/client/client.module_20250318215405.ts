import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./models/client.model";

@Module({
    imports:[TypeOrmModule.forFeature([Client],)],
    providers:[],
    exports:[]
})

export class ClientModule{}