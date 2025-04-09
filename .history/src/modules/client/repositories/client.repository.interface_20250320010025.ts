import { BaseRepository } from "src/common/repositories/base.repository";
import { Client } from "../models/client.model";

export abstract class ClientRepositoryInterface extends BaseRepository<Client>{

    abstract getClients(): Promise<Client[]>;
}