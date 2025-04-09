import { Query, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { ClientService } from "../service/client.service";

@Resolver(() => Client)
export class ClientResolver{

    constructor(private readonly clientService: ClientService){}

    @Query(()=> Client, {name: 'getClients'})
    async getClients(): Promise<Client[]>{
        try{
            c
        }catch(e){

        }
    }
}