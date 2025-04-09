import { Query, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { ClientServiceInterface } from "../service/client.service.interface";
import { InternalServerErrorException } from "@nestjs/common";

@Resolver(() => Client)
export class ClientQueryResolver{

    constructor(private readonly clientService: ClientServiceInterface){}

    @Query(()=> [Client], {name: 'clients', nullable: false}, )
    async getClients(): Promise<Client[]>{
        try{
            return await this.clientService.getClients();
        }catch(e){
            throw new InternalServerErrorException('Failed to fetch clients');
        }
    }

    @Query(()=> Client, {name: 'client', nullable: false}, )
    async getClientById(): Promise<Client>{
        try{
            return await this.clientService.getClien();
        }catch(e){
            throw new InternalServerErrorException('Failed to fetch clients');
        }
    }
}