import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
//dotnev configaration
dotenv.config()

//database 
import { DBconnection } from "./src/config/DBconfig.js"


const app = express()
DBconnection()

//for form handling 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set morgan 
app.use(morgan("dev"))


//cookie parser set up
app.use(cookieParser())

// CORS setup
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], //allowed methods
  })
);


import userRouter from "./src/routes/user.routes.js"
import eventRouter from "./src/routes/event.routes.js"
import ticketRouter from "./src/routes/ticket.routes.js"
import paymentRouter from "./src/routes/payment.routes.js"
app.use('/api/user',userRouter)
app.use('/api/event',eventRouter)
app.use('/api/ticket',ticketRouter)
app.use('/api/payment',paymentRouter)
export default app





