import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();
const app = express();

app.listen(4000, () => {
  console.log("Server started at http://localhost:4000");
});
