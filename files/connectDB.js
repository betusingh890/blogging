import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.URI;

const connectDB = async() =>{
    try{
        await mongoose.connect(URI);
        console.log("Successfully connected to database");
    }
    catch(err){
        console.log("There was a problem connecting to database");
        console.log(err);
    }
}

export default connectDB;