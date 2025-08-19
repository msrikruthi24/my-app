import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import skillRoutes from "./routes/skills.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() =>
  console.log("✅ MongoDB connected")
);

app.use("/api/skills", skillRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));