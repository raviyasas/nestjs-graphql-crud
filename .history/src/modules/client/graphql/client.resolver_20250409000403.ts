import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { ClientServiceInterface } from "../service/client.service.interface";
import { InternalServerErrorException } from "@nestjs/common";
import { ResponseDto } from "src/common/dtos/response.dto";
import { CreateClientDto } from "../dtos/create-client.dto";

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
        @Args({name: 'clientId', type: () => String}) clientId: string
    ): Promise<Client>{
        try{
            return await this.clientService.getClient(clientId);
        }catch(e){
            throw new InternalServerErrorException('Failed to fetch client by id');
        }
    }

    @Mutation(() => ResponseDto)
    async createClient(
        @Args('client') clientInput: CreateClientDto,
    ): Promise<ResponseDto>{

        try {
            
        } catch (error) {
            
        }
        const clientParam = {
            clientName: `${clientInput.clientName}`,
            clientCode: `${clientInput.clientCode}`,
            clientDescription: `${clientInput.clientDescription}`,
            clientIsActive: clientInput.clientIsActive,
            clientCreatedBy: `${clientInput.clientCreatedBy}`
        }

        return await this.clientService.createClient(clientParam)
    }
}