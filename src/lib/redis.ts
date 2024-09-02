import { createClient, RedisClientType, RedisFunctions, RedisModules, RedisScripts } from "redis";

const url = process.env.REDIS_URL;
const password = process.env.REDIS_PASSWORD;

export interface RedisInstance extends RedisClientType<RedisModules, RedisFunctions, RedisScripts> {}

export const useRedis = async (): Promise<RedisInstance> => {
    const client = await createClient({
        url: `redis://:${password}@${url}`,
    })
    .on('error', console.error)
    .connect();

    return client;
};
