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
            clientCode: `${}`
        }

        // const createClientParam = {
        //     clientCode: `${client.clientCode}`,
        //     clientName: `${client.clientName}`,
        //     clientDescription `${client.clientDescription}`,
        //     clientIsActive: `${client.isActive}`,
        //     clientCreatedBy: `${client.createdBy}`
        // }

        return await this.clientService.createClient(createClientParam)
    }
}