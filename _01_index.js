const express = require("express");
const port = 3000;
const hostname = "127.0.0.1";
const app = express();


app.get('/',(req,res)=>{
    res.write("<h1>Hello from the home page</h1>");
    res.send(); //// This is done after the write to stop the loading of that 
})

app.get('/about',(req,res)=>{
    res.send("Hello from the home page");
})


app.listen(port,()=>{
    console.log(`Your app is running at the http://${hostname}:${port}`)
})
