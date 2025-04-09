import { Logger } from "@nestjs/common";
import { BaseRepository } from "../repositories/base.repository";

export class BaseService<T>{
    constructor(
        protected readonly logger: Logger,
        private readonly repository: BaseRepository<T>
    ){}

    async findAll(): Promise<T[]> {
        this.logger.debug('Fetching all entities');
        try {
            const entities = await this.repository.find();
            this.logger.debug(`Found ${entities.length} entities`);
            return entities;
        } catch (error) {
            this.logger.error('Error fetching entities', error.stack);
            throw error;
        }
    }
}