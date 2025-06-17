import express from "express";
import dotenv from 'dotenv' ;
dotenv.config() ;
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT } from "./src/config/config.js";
import userRouter from "./src/User/user.route.js"
import blogRouter from "./src/Blog/blog.route.js"

const app = express()


// middleware 

app.use(express.json()) ;
app.use(cors()) ;
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


const main = async() => {
  
 await mongoose.connect(process.env.MONGO_URL)

}

main().then(()=> console.log("Mongodb connected successfully!")).catch(err => console.log(err)) ;

// routes 
app.use("/api/user",userRouter) ;
app.use("/api/blog",blogRouter) ;



app.get("/",(req,res) => {

    res.send("Hello World!")
})

app.listen(PORT,()=> {
 
    console.log(`Server is connected at ${PORT}`)

})

