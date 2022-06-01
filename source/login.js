import express from "express";
import bodyParser from "body-parser"

import Users from "../source/users.js"
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("this is the backend of login");
})


app.post("/", (req,res)=>{
    var data = req.body;
    console.log("we are here");
    console.log(data);

})


export default app;