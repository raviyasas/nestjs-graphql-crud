import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { CreateClientDto } from "../dtos/create-client.dto";
import { ClientServiceInterface } from "../service/client.service.interface";
import { ResponseDto } from "src/common/dtos/response.dto";

@Resolver(() => Client)
export class ClientMutationResolver{

     constructor(private readonly clientService: ClientServiceInterface){}

    @Mutation(() => Client)
    async createClient(
        @Args('client') client: CreateClientDto,
    ): Promise<ResponseDto>{

        const createClientParam = {
            clientCode: `${client.clientCode}`,
            clientName: `${client.clientName}`,
            clientDescription `${client.clientDescription}`,
            clientsActive: `${client.isActive}`,
            client_createdBy: `${client.createdBy}`
        }

        return await this.clientService.createClient(createClientParam)
    }
}