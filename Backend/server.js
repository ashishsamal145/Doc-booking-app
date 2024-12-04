import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"





//App config
const app= express()
const port=process.env.PORT || 4000
await connectDB()
connectCloudinary()


//middlewares
app.use(express.json())
app.use(cors())


//API End Points



app.get('/',(req,res)=>{
    res.send('API voila!!!!!!')
})

app.listen(port,()=>{
    console.log("Server started on port ",port);
})
