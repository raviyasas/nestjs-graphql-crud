import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";

export class BaseRepository<T>{

    private repository: Repository<T>;

    constructor(protected readonly logger: Logger, repos)
}