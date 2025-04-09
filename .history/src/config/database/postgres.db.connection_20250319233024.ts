import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EnvUtils } from "src/env.utils";
import { Entity } from "typeorm";

export const DBS = {
    CLIENT: EnvUtils.get('CLIENT_DB'),
    // STORES: EnvUtils.get('STORES_DB')

};

const COMMON_DB = {
    host: EnvUtils.get('HOST'),
    port: EnvUtils.get('DB_PORT'),
    username: EnvUtils.get('USERNAME'),
    password: EnvUtils.get('PASSWORD'),
    type: postgr
    synchronize: true,
    autoLoadEntities: true,
    logging: false,
    ssl: true,
    
}

export const dbConnection: TypeOrmModuleOptions[] = [
    {
        // type: 'postgres',
        name: DBS.CLIENT,
        database: DBS.CLIENT,
        ...COMMON_DB
    },
    // {
    //     type: 'postgres',
    //     name: DBS.STORES,
    //     database: DBS.STORES
    // }

]