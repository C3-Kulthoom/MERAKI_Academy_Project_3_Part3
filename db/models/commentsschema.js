const mongoose = require("mongoose");

const comments = new mongoose.Schema({
    comment:{type:String },
    commenter:{type:mongoose.Schema.Types.ObjectId , ref:"User"}
    
})


const commentsModel = mongoose.model("Comment" ,comments )
module.exports = commentsModel 