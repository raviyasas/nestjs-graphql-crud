import { Logger } from "@nestjs/common";
import { Repository, FindOneOptions, FindManyOptions } from "typeorm";
import { BaseModel } from "../models/base.model";

/**
 * A generic base repository class providing common database operations with logging.
 * @template T - The entity type, constrained to extend BaseModel.
 */
export class BaseRepository<T extends BaseModel> {
    constructor(
        protected readonly logger: Logger,
        protected readonly repository: Repository<T>
    ) {
        this.logger.debug(`${this.constructor.name} initialized`);
    }

    /**
     * Retrieves all entities matching the given options.
     * @param options - TypeORM find options (e.g., where, order).
     * @returns A promise resolving to an array of entities.
     */
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

    /**
     * Retrieves a single entity by the given options.
     * @param options - TypeORM find options (e.g., where).
     * @returns A promise resolving to the entity or undefined if not found.
     */
    async findOne(options: FindOneOptions<T>): Promise<T | undefined> {
        this.logger.debug('Fetching single entity', options);
        try {
            const entity = await this.repository.findOne(options);
            if (!entity) {
                this.logger.warn('Entity not found');
            }
            return entity;
        } catch (error) {
            this.logger.error('Error fetching entity', error.stack);
            throw error;
        }
    }

    /**
     * Creates and saves a new entity.
     * @param data - The partial entity data to create.
     * @returns A promise resolving to the saved entity.
     */
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

    /**
     * Saves an entity (inserts or updates).
     * @param entity - The entity to save.
     * @returns A promise resolving to the saved entity.
     */
    async save(entity: T): Promise<T> {
        this.logger.debug(`Saving entity with ID: ${entity.id}`);
        try {
            const savedEntity = await this.repository.save(entity);
            this.logger.debug(`Entity saved with ID: ${savedEntity.id}`);
            return savedEntity;
        } catch (error) {
            this.logger.error('Error saving entity', error.stack);
            throw error;
        }
    }

    /**
     * Deletes an entity by its ID.
     * @param id - The ID of the entity to delete.
     * @returns A promise resolving when the entity is deleted.
     */
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