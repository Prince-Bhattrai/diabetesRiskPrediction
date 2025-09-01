import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"
import userRouter from "./Routes/userRoutes.js"
import predictRouter from "./Routes/queryRoutes.js"
configDotenv()

const app =express()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin:"*",
    methods:"*",
    allowedHeaders:"*",

}))



//Routes
app.use("/v1/api/user", userRouter)
app.use("/v1/api/query", predictRouter)



app.get("/test",(req, res)=>{
    return res.status(200).json({
        success:true,
        message:`Server is running on ${process.env.PORT}`
    })
} )


export default app;