import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

function connect() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to db");
    })
    .catch((err)=>{
        console.log("Failed db connection",err)
    })
}

export default connect;