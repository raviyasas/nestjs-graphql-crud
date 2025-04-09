import { Logger } from "@nestjs/common";

export class BaseService<T>{
    constructor(
        protected readonly logger: Logger,
        
    )
}