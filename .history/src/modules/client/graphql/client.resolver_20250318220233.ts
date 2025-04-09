import { Query, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { ClientService } from "../service/client.service";

@Resolver(() => Client)
export class ClientResolver{

    constructor(private readonly clientService: ClientServiceI){}

    @Query(()=> Client, {name: 'getClients'})
    async getClients(): Promise<Client[]>{
        try{
            const clientList = await this.clientService.getClients();
            return clientList || null;
        }catch(e){
            return null;
        }
    }
}