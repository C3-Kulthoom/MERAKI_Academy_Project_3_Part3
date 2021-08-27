const jwt = require("jsonwebtoken");


const authorization  =(string)=>{

    return (req, res, next)=>

    {

        if(req.token.role.permissions.includes(string) )
        {
            next()
 
        }
else{
    res.status (403).json( { success: false , massage : "Unauthorizd"});

}
}
}


module.exports= authorization ;