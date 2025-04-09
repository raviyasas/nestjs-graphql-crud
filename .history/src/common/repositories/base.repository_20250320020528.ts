import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";

export class BaseRepository<T>{

    private readonly repository: Repository<T>;

    constructor(protected readonly logger: Logger, repository: Repository<T>){
        this.repository = repository;
    }

    async find(options?: FindManyOptions<T>): Promise<T[]> {
        this.logger.debug('Fetching entities', options);
        try {
            const entities = await this.repository.find(options);
            this.logger.debug(`Found ${entities.length} entities`);
            return entities;
        } catch (error) {
            this.logger.error('Error fetching entities', error.stack);
            throw error;
        }
    }

}