const express = require("express");

const 
createNewComment 
    = require('../controllers/comments');

  const commentsRouter = express.Router();

  commentsRouter.post("/articles/:id/comments", createNewComment);
  module.exports = commentsRouter;