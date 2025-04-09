import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([Cl])],
    providers:[],
    exports:[]
})

export class ClientModule{}