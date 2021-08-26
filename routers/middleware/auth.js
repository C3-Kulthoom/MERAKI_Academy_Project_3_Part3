const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json("no token");
  }
  console.log(req.headers.authorization);
  const token = req.headers.authorization.split(" ").pop();

  jwt.verify(token, process.env.SECRET, (err, result) => {
    if (err) {
      res.status (403).json( { success: false , massage : "forbeddin"});
    } else {
      console.log(result);
      next();
    }
  });
};

module.exports={ auth };
