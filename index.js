import express from "express"
import dotenv from "dotenv"
import { connect } from "./config/db.js"
import apiRoutes from "./routes/apiRoutes.js"
import cors from "cors"

const server = express()

dotenv.config({
    path: ".env"
})

server.use(express.json())

server.use(cors())

connect()

server.use("/server", apiRoutes)

server.listen(process.env.PORT ,() => {
    console.log(`Puerto escuchando en ${
      process.env.PORT  
    }`);
})