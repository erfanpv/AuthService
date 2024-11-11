import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/authRoutes.js";
import errorHandler from "./src/middlewares/error_handler.js";

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/auth", authRouter);
app.use("*", (req, res) => {
  res
    .status(404)
    .json({ success: false, message: "This routes is not available" });
});

app.use(errorHandler)

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server Runnig on ${PORT}`);
});
