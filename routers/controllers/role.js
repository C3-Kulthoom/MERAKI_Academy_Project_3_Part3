const rolesModel = require("../../db/models/roleschema");
require("dotenv").config();
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");


const createNewRole = (req ,res)=>{
const {
role,
permissions
}=req.body

const Role = new rolesModel ({
role,
permissions
})

    Role
    .save()
    .then((result)=>
    {
        res.status(201).json({success:true , massage:"Success Role Added" , author : result});
    })
    .catch((err) => {
      res.status(500).json({success:false  , massage:"Server error" });
    });

    }




module.exports = createNewRole 