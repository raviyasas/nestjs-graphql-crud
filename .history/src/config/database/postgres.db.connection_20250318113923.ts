import { EnvUtils } from "src/env.utils";

export const DBS = {
    CLIENT: EnvUtils.get('CLIENT_DB'),
    STORES: EnvUtils.get('STORES_DB')

};

const COMMON_DB = {
    host: EnvUtils.get(''),
    port: EnvUtils.get(''),
    username: EnvUtils.get(''),
    password: EnvUtils.get(''),
    synchronize: EnvUtils.get(''),
    autoLoadEntities: true,
    logging: false,
    ssl: true,
}

export 