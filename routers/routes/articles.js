const express = require("express");
const {
createNewArticle
,getAllArticles 
,getArticlesByAuthor
 ,getAnArticleById
 ,updateAnArticleById
,deleteArticleById,
deleteArticlesByAuthor}
    = require('../controllers/articles');
  const articlesRouter = express.Router();




  articlesRouter.post("/articles",createNewArticle );
  articlesRouter.get("/articles",getAllArticles );
  articlesRouter.get("/articles/search_1/:authorId",getArticlesByAuthor );
  articlesRouter.get("/articles/search_2/:id",getAnArticleById );
  articlesRouter.put("/articles/:id",updateAnArticleById );
  articlesRouter.delete("/articles/:id",deleteArticleById );
  articlesRouter.delete("/articles",deleteArticlesByAuthor );


module.exports = articlesRouter;