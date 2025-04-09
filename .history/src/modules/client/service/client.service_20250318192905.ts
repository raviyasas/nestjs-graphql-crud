import { Injectable } from "@nestjs/common";
import { ClientServiceInterace } from "./client.service.interface";

@Injectable()
export class ClientService implements ClientServiceInterace{

    constructor(private readonly clientRepository: )
}