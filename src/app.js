import express from "express"
import mongoose, { mongo } from "mongoose"
import routes from "./routes"
import cors from "cors"

class App{
    constructor(){
        this.server = express()
        this.database()
        this.cors()
        this.server.use(routes)
        

    }
    database (){
        console.log("mongao")
        mongoose.connect('mongodb+srv://gabrielfcampos2017:K06j8mNHqhhTORxa@cluster0.mfcidsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    }
    cors (){
        const corsOptions ={
            origin:'*', 
            credentials:true
         }
        this.server.use(cors(corsOptions)) 
    }
}
export default new App().server