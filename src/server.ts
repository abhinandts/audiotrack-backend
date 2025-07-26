
import express, {Application} from "express";
import dotenv from 'dotenv'

dotenv.config();

const app:Application = express()
const PORT = process.env.PORT

app.listen(PORT, () => console.log("server started...."))