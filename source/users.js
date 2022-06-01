import express from "express";
import bodyParser from "body-parser";

import Users from "../models/users.js";

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("you are at the backend of users");

})

app.post("/", (req,res)=>{
    var data = req.body;
    var obj = new Users({
        name : data.Name,
        email: data.Email,
        password: data.Password
    });

    try{
        obj.save()
    }
    catch(err){
        console.log("there was error trying to save object");
        console.log(err);
    }
    console.log(data);
})


export default app;