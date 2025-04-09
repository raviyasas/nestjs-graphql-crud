import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";
import { CreateClientDto } from "../dtos/create-client.dto";

@Resolver(() => Client)
export class ClientMutationResolver{

    @Mutation(() => Client)
    async createClient(
        @Args('client') client: CreateClientDto,
    ):
}