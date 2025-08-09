import { createClient, type RedisClientType } from "redis";

const redisURL: string = process.env.REDIS_URL as string;

if (!process.env.REDIS_URL) {
  throw new Error("Redis url is not defined");
}

export class RedisConfig {
  private static client: RedisClientType | null = null;

  static async getClient(): Promise<RedisClientType> {
    if (!this.client) {
      this.client = createClient({
        url: redisURL,
      });

      this.client.on("error", (err) => {
        console.log("Redis client error", err);
      });

      this.client.on("connect", () => {
        console.log("Redis connected");
      });

      if (!this.client.isOpen) {
        await this.client.connect();
      }
    }

    return this.client;
  }
}
