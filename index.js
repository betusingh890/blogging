import express from "express";

import connectDB from "./source/connectDB.js";
import usersFile from "./source/users.js";
import loginFile from "./source/login.js";

const app = express();

connectDB();




app.get("/", (req,res)=>{
    res.send("We are at home route of backend");
});

app.use("/register", usersFile);
app.use("/login", loginFile);


var PORT = 8000|| process.env.PORT;
app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})