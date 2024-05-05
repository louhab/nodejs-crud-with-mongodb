const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const employeSchemma = new Schema({
    name:{
        type:String 
    },
    destinition:  {
        type:String 
    },
    phonne : {
        type:String
    },
    age : {
        type:Number
    }
},{timestamps:true}
);

const Employee = mongoose.model("Employee" ,employeSchemma)
module.exports = Employee ;
