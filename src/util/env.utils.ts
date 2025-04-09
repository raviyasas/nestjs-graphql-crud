import { configDotenv } from "dotenv";

configDotenv()
export class EnvUtils{
    static get (key: string): string  | undefined{
        const value = process.env[key];

        return value;
    }
}