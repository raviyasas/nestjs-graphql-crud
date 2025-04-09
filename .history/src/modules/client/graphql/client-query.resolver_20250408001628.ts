import { Args, Query, Resolver } from "@nestjs/graphql";
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

    @Query(()=> Client, {name: 'client', nullable: false} )
    async getClientById(
        @Args({name: 'clientId', type: () => string}) clientId: string
    ): Promise<Client>{
        try{
            return await this.clientService.getClient(clientId);
        }catch(e){
            throw new InternalServerErrorException('Failed to fetch clients');
        }
    }
}