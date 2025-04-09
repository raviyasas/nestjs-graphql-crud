import { Query, Resolver } from "@nestjs/graphql";
import { Client } from "../models/client.model";

@Resolver(() => Client)
export class ClientResolver{

    @Query(()=> Client, {name: })
}