import { Query, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { ClientServiceInterface } from "../service/client.service.interface";

@Resolver(() => Client)
export class ClientResolver{

    constructor(private readonly clientService: ClientServiceInterface){}

    @Query(()=> [Client], {name: 'getClients', nullable: false}, )
    async getClients(): Promise<Client[]>{
        try{
            return await this.clientService.getClients();
            return clientList || [];
        }catch(e){
            return [];
        }
    }
}