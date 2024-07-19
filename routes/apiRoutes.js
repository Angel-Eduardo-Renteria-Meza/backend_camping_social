import express from "express"; 
import userRouter from "./user.js";

const apiRoutes = express.Router()


apiRoutes.use("/user", userRouter)




export default apiRoutes