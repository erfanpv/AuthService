import express from "express";
import { register, login } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", register);
authRouter.post("/login", login);

export default authRouter;
