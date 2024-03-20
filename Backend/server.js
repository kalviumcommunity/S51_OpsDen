const express=require("express")
const app=express()

app.get("/home",(req,res)=>{
    res.send("hallo every one")
})

app.listen(3000,()=>{
    console.log("Server is runing on port 3000")
})
