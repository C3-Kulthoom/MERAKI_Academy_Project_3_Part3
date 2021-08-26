const express = require("express");

const  createNewRole =require ("../controllers/role")

const roleRouter =express.Router() 

roleRouter.post("/role",createNewRole )

   
module.exports = roleRouter;