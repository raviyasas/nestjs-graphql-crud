import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";

export class BaseRepository<T>{

    private readonly repository: Repository<T>;

    constructor(protected readonly logger: Logger, repository: Repository<T>){
        this.repository = repository;
    }

    

}