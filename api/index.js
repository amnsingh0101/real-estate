import express from "express";
import mongoose, { model } from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"; // Import the auth routes

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
app.use("/api/user", userRouter); 
app.use("/api/auth",authRouter); // Add this line to use the auth routes
