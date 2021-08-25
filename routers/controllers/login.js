
const User = require("../../db/models/usersschema");
const usersModel = require("../../db/models/usersschema");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;

  usersModel.findOne({email}).then((result) => {
    if (!result) {
      res.status(404).json("email not found");
    }
    try {
      const vaild = bcrypt.compare(password, result.password);
      if (!vaild) {
        res.status(404).json("password error");
      } else {
        const payload = {
          id: result._id,
          name: result.name,
          country : result.country 
        };

        const SECRET = process.env.SECRET;
        const options = {
          expiresIn: "60m",
        };

        const token = jwt.sign(payload, SECRET, options);

        res.status(200).json({message:" you logged in", token:token});
      }
    } catch (error) {
      res.json(error);
    }
  });
};
  module.exports = login 