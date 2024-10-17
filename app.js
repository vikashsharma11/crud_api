const mongoose = require('mongoose');
const express = require('express');
// const router = require('./routes/dataroutes')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/dataroutes'))


mongoose.connect("mongodb+srv://vikashshmvs07:hjFpadZGYhlnhy8p@cluster0.qh2ur.mongodb.net/test1?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("connected")
        app.listen(3000, () => {
            console.log("listening at - http://localhost:3000/")
        }) 
    })
    .catch((err)=>{
        console.log("connection failed!",err)
    })
    

