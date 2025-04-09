import { Query, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";

@Resolver(() => Client)
export class ClientResolver{

    constructor(private readonly clientServi)

    @Query(()=> Client, {name: 'getClients'})
    async getClients(): Promise<Client[]>{

    }
}