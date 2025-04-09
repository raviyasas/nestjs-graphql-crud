import { EnvUtils } from "src/env.utils";

export const DBS = {
    CLIENT: EnvUtils.get('CLIENT_DB'),
    STORES: EnvUtils.get('STORES_DB')

};

const COMMON_DB = {
    host: EnvUtils.get(''),
    port: EnvUtils.get(''),
    
}