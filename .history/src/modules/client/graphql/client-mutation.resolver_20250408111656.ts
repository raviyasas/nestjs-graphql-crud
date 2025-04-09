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
        @Args('client') clientInput: CreateClientDto,
    ): Promise<ResponseDto>{

        const clientParam = {
            clientName: `${clientInput.clientName}`,
            clientCode: `${clientInput.clientCode}`,
            clientDescription: `${clientInput.clientDescription}`,
            clientIsActive: ${clientInput.clientIsActive}`,
            clientCreatedBy: `${clientInput.clientCreatedBy}`
        }

        return await this.clientService.createClient(clientParam)
    }
}