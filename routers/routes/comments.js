const express = require("express");
const {auth} = require("../middleware/auth");
const authorization  = require("../middleware/authorization ");
const 
{createNewComment }
    = require('../controllers/comments');

  const commentsRouter = express.Router();

  commentsRouter.post("/articles/:id/comments",auth ,authorization("CREATE_COMMENTS"), createNewComment);
  module.exports = commentsRouter;