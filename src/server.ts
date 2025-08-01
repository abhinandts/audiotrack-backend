import express, { Application } from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";


dotenv.config();

const app: Application = express()
const PORT = process.env.PORT

app.use(express.json());

const connectDB = async (): Promise<void> => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string)
        console.log("connected")
    } catch (error) {
        console.log("mongo db connection failed")
        process.exit(1);
    }
}

const startServer = async (): Promise<void> => {
    await connectDB();

    app.listen(PORT, () => {
        console.log("running..")
    })
}

startServer();