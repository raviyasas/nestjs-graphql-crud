import { Logger } from "@nestjs/common";
import { BaseRepository } from "../repositories/base.repository";

export class BaseService<T>{
    constructor(
        protected readonly logger: Logger,
        private readonly repository: BaseRepository<t
    )
}