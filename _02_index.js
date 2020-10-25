const express = require('express');
const app = express();
const port = 3000;
const hostname = "127.0.0.1";



app.get('/',(req,res)=>{
    res.send([
        {
             id:3,
             name:"Abhishek Nayak",
        },{
         id:13,
         name:"Adarsh Nayak",
        }
    ])
 })

app.get('/biodata',(req,res)=>{
   res.json([
       {
            id:3,
            name:"Rehan Nayak",
       },{
        id:13,
        name:"Abhikshya Nayak",
       }
   ])
})





app.listen(port,hostname,()=>{
    console.log(`Your app is running at the http://${hostname}:${port}/`)
});