const express = require("express");

const mongoose = require("mongoose");

const morgan = require("morgan");

const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/crud_nodejs_mongodb")

const db =  mongoose.connection

db.on("error" , (erro)=>{
    console.log(error)
})
db.once("open" , ()=>{
    console.log("Database connection is donne");
});

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const EmployeeRouter = require('./routes/employee');


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`the app is runing on  ${PORT}` )
})

app.use("/api/employee", EmployeeRouter)


