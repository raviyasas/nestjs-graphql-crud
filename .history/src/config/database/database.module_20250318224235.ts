import { DynamicModule, Global, Module } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

@Global()
@Module({})
export class DatabseModule{
    static forRoot(connection: TypeOrmModuleOptions[]): DynamicModule{
        return{
            modul
        }
    }
}