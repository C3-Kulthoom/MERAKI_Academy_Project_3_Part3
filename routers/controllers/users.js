const User = require("../../db/models/usersschema");
const usersModel = require("../../db/models/usersschema");
const bcrypt = require("bcrypt");
const createNewAuthor =(req, res)=>{
    const {   
    firstName,
    lastName,
    age,
    email,
    password, 
    country
 } = req.body;
      
    const User = new usersModel({
    firstName,
    lastName,
    age,
    email,
    password,
    country
    });
  
    User
      .save()
      .then((result) => {
        res.status(201).json({success:true , massage:"Success Author Added author" , author : result});
      })
      .catch((err) => {
        res.status(409).json({success:false  , massage:"The email already exists" });
      });
  };




  module.exports = createNewAuthor 