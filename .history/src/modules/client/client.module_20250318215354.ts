import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.f],
    providers:[],
    exports:[]
})

export class ClientModule{}