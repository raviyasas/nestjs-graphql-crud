import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EnvUtils } from "src/util/env.utils";

export const DBS = {
    CLIENT: EnvUtils.get('CLIENT_DB'),
    // STORES: EnvUtils.get('STORES_DB')

};

const COMMON_DB = {
    host: ,
    port: 5432,
    username: 'postgres',
    password: '1234',
    synchronize: false,
    autoLoadEntities: true,
    logging: false,
    // ssl: true,
}

export const dbConnection: TypeOrmModuleOptions[] = [
    {
        type: 'postgres',
        ...COMMON_DB,
        name: DBS.CLIENT,
        database: DBS.CLIENT
    },
    // {
    //     type: 'postgres',
    //     name: DBS.STORES,
    //     database: DBS.STORES
    // }

]