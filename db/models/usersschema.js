
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const users = new mongoose.Schema({
    firstName:{type:String },
    lastName:{type:String},
    age:{type:Number},
    email:{type:String , uniqe:true }, 
    password:{type:String },
    country :{type:String }

})

users.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
  });


const usersModel = mongoose.model("User" ,users )

module.exports = usersModel
