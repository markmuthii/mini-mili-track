import "dotenv/config";
import express from "express";
import { v1Router } from "./routes/v1/index.js";
import { connectToDatabase } from "./db/config.js";

await connectToDatabase();

console.log("here!");

const app = express();

app.use(express.json());

app.use("/api/v1", v1Router);

app.listen(4000);
