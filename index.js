import express from "express";

const app = express();




app.get("/", (req,res)=>{
    res.send("We are at home route of backend");
});


var PORT = 8000|| process.env.PORT;
app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})