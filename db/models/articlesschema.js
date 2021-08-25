
const mongoose = require("mongoose");

const articles = new mongoose.Schema({
    title:{type:String },
    description:{type:String},
    author:{type:mongoose.Schema.Types.ObjectId , ref:"User"},
    comments:[{type:mongoose.Schema.Types.ObjectId , ref:"Comment"}]

})


const articlesModel = mongoose.model("Article" ,articles )
module.exports = articlesModel 
