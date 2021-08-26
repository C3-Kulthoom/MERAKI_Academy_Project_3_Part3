const express = require("express");
const { auth } = require("../middleware/auth");

const 
createNewComment 
    = require('../controllers/comments');

  const commentsRouter = express.Router();

  commentsRouter.post("/articles/:id/comments",auth , createNewComment);
  module.exports = commentsRouter;