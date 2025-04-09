import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";

@Resolver(() => Client)
export class ClientMutationResolver{

    @Mutation(() => Client)
    async createClient(
        @Args('client') clien
    )
}