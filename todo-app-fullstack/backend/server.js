import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import todoRouter from "./routes/todo.routes.js";
import connectDB from "./db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.use("/api/v1/todos", todoRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("Error starting server:", error);
});

