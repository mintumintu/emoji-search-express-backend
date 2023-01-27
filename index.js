const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const app= express();

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello</h1>");
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to Server & mongodb");
    })
}).catch((err)=>{
    console.log(err);
})