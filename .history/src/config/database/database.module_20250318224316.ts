import { DynamicModule, Global, Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Global()
@Module({})
export class DatabseModule{
    static forRoot(connection: TypeOrmModuleOptions[]): DynamicModule{
        return{
            module: DatabseModule,
            imports: connection.map((connection) => {
                TypeOrmModule.fo
            })
        }
    }
}