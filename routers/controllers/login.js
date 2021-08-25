
const User = require("../../db/models/usersschema");
const usersModel = require("../../db/models/usersschema");
const login  =(req,res)=> {
    usedemail=req.body.email
    usedpassword=req.body.password
  
    usersModel.findOne({email:usedemail ,password:usedpassword})
    .then((result) => {
      console.log (result)
      if (result)
      {res.status(200).json({success:true , massage:"Valid login credentials" });}
      else 
      {
        res.status(401).json({success: false, massage:"Invalid login credentials"  });
    
      }
    })
    .catch((err) => {
        res.status(500).json({success: false, massage:"Invalid login credentials"  });
    });
  
  }

  module.exports = login 