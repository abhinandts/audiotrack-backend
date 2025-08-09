import mongoose from "mongoose";

export class DatabaseConfig {
  static async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log("MongoDB connected");
    } catch (error) {
      console.log("Database connecetion error:", error);
      process.exit(1);
    }
  }
}
