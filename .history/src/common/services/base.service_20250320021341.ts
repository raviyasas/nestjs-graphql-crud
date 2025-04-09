import { Logger } from "@nestjs/common";
import { BaseRepository } from "../repositories/base.repository";
import { BaseModel } from "../models/base.model";

export class BaseService<T extends BaseModel> {
    constructor(
        protected readonly logger: Logger,
        protected readonly repository: BaseRepository<T>
    ) {
        this.logger.debug(`${this.constructor.name} initialized`);
    }

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

    async findById(id: string): Promise<T | undefined> {
        this.logger.debug(`Fetching entity with ID: ${id}`);
        try {
            const entity = await this.repository.findOne({ where: { id } } as any);
            if (!entity) {
                this.logger.warn(`Entity with ID ${id} not found`);
            }
            return entity;
        } catch (error) {
            this.logger.error(`Error fetching entity with ID ${id}`, error.stack);
            throw error;
        }
    }

    async create(data: Partial<T>): Promise<T> {
        this.logger.debug('Creating new entity', data);
        try {
            const entity = this.repository.create(data);
            const savedEntity = await this.repository.save(entity);
            this.logger.debug(`Entity created with ID: ${savedEntity.id}`);
            return savedEntity;
        } catch (error) {
            this.logger.error('Error creating entity', error.stack);
            throw error;
        }
    }

    async update(id: string, data: Partial<T>): Promise<T> {
        this.logger.debug(`Updating entity with ID: ${id}`, data);
        try {
            const entity = await this.findById(id);
            if (!entity) {
                throw new Error(`Entity with ID ${id} not found`);
            }
            Object.assign(entity, data);
            const updatedEntity = await this.repository.save(entity);
            this.logger.debug(`Entity with ID ${id} updated`);
            return updatedEntity;
        } catch (error) {
            this.logger.error(`Error updating entity with ID ${id}`, error.stack);
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        this.logger.debug(`Deleting entity with ID: ${id}`);
        try {
            const result = await this.repository.delete(id);
            if (result.affected === 0) {
                this.logger.warn(`Entity with ID ${id} not found`);
            } else {
                this.logger.debug(`Entity with ID ${id} deleted`);
            }
        } catch (error) {
            this.logger.error(`Error deleting entity with ID ${id}`, error.stack);
            throw error;
        }
    }
}