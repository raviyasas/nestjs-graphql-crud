import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientService{

    constructor(private readonly clientRepos)
}