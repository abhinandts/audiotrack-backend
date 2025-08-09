import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

import { DatabaseConfig } from "./infrastructure/database/connection.js";

const PORT = process.env.PORT;

const startServer = async (): Promise<void> => {
  try {
    await DatabaseConfig.connect();

    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server", error);
  }
};

await startServer();
