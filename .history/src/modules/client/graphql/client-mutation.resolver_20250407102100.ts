import { Mutation, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";

@Resolver(() => Client)
export class ClientMutationResolver{

    @Mutation
}