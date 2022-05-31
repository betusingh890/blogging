import express from "express";

import connectDB from "./files/connectDB.js";

const app = express();

connectDB();




app.get("/", (req,res)=>{
    res.send("We are at home route of backend");
});




var PORT = 8000|| process.env.PORT;
app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})