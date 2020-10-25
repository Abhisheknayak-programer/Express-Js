const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const localhost = "127.0.0.1";


const StaticPath = path.join(__dirname,"public");    ////In this way we can enter a directory in express

app.use(express.static(StaticPath));             //// We have to use our app

app.get("/",(req,res)=>{
    res.send("Welcome to home page");          //// This is the default home page if nothing is there then this will be there
})

app.listen(port,localhost,()=>{
    console.log(`Your server is now started at the http://${localhost}:${port}/`)
});


