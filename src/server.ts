import app from "./app.js";


import { DatabaseConfig } from "./infrastructure/database/connection.js";
import { RedisConfig } from "./infrastructure/cache/config.js";

const PORT = process.env.PORT;

const startServer = async (): Promise<void> => {
  try {
    await DatabaseConfig.connect();
    await RedisConfig.getClient();

    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

await startServer();
