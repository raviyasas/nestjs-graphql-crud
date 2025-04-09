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
            client_code: `${client.clientCode}`,
            client_name: `${client.clientName}`,
            client_description `${client.clientDescription}`,
            client_isActive: `${client.isA}`
        }

        return await this.clientService.createClient(createClientParam)
    }
}