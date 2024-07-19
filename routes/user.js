import express from "express";
import { LogIn, saveUsers } from "../controllers/user.js";

const userRouter = express.Router()


userRouter.post("/", saveUsers)
userRouter.post("/login", LogIn)



export default userRouter