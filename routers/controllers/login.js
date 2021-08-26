
// const User = require("../../db/models/usersschema");
const usersModel = require("../../db/models/usersschema");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  const { email, password } = req.body;

  usersModel.findOne({email}).then((result) => {
    console.log("fvhnjkdfnvkndfkvl ", result )

    if (!result) {
      
      res.status(404).json({ success: false , massage : "The email doesn't exist"});
    }
    // else {res.status(404).json("The email doesn't exist"); }
    try {
     bcrypt.compare(password, result.password, ((err,data)=>
      {if (err) throw err

      if (!data) {
        res.status(404).json({success: false  , massage :"The password you’ve entered is incorrect"});
      } else {
        const payload = {
          id: result._id,
          name: result.name,
          country : result.country ,
          role: { role: result.rolr.role, permissions: result.role.permissions }
        };

        const SECRET = process.env.SECRET;
        const options = {
          expiresIn: "60m",
        };

        const token = jwt.sign(payload, SECRET, options);

        res.status(200).json({ success: true , message:" Email and Password are correct", token:token});
      }
    }));
    }catch (error) {
      res.json(error);
    }
  }).catch((err)=>{ throw err })

  }  ;

  module.exports = login 