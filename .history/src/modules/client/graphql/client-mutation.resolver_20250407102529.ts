import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { CreateClientDto } from "../dtos/create-client.dto";
import { ClientServiceInterface } from "../service/client.service.interface";

@Resolver(() => Client)
export class ClientMutationResolver{

     constructor(private readonly clientService: ClientServiceInterface){}

    @Mutation(() => Client)
    async createClient(
        @Args('client') client: CreateClientDto,
    ): Promise<ResponseDto>{

        const createClient = {

        }

        return await this.clientService.createClient(createClientPa)
    }
}