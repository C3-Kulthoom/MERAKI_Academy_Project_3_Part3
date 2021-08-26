const mongoose = require("mongoose")


const roles = new mongoose.Schema ({
    role: { type:String},
    permissions:[{type:String} ] 
    
})




const rolesModel =mongoose.model("Role" ,roles ) 
module.exports = rolesModel 