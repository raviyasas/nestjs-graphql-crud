import { DynamicModule, Global, Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Global()
@Module({})
export class DatabaseModule{
    static forRoot(connection: TypeOrmModuleOptions[]): DynamicModule{
        return{
            module: DatabaseModule,
            imports: connection.map((connection) => {
                TypeOrmModule.forRoot(connection),
            }),
            exports:[TypeOrmModule]
        };
    }
}