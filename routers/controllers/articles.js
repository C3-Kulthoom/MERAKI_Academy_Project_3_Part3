const Article = require("../../db/models/articlesschema");
const articlesModel = require("../../db/models/articlesschema");

 const createNewArticle = (req,res) =>{
    const {   
       title,
       description,
       author
     } = req.body;
          
        const Article = new articlesModel ({
        title,
        description,
        author 
        });
      
        Article
          .save()
          .then((result) => {
            res.status(201).json({success:true , massage:"Success Article created article" , author : result});
          })
          .catch((err) => {
            res.status(500).json({success:false  , massage:" server error" });
          });
      };
 

const getAllArticles  =(req,res)=>{

    articlesModel.find({})
    .then((result) => {
      res.status(200).json({success:true , massage:"all the articles" , articles : result});
    })
    .catch((err) => {
        res.status(500).json({success: false, massage:"server error"  });
    });

}



const getArticlesByAuthor  =(req,res)=>{
const author =req.params.authorId 
    articlesModel.find({author:author})
    .then((result) => {
      res.status(200).json({success:true , massage:`all the articles by => ${author}` , articles : result});
    })
    .catch((err) => {
        res.status(404).json({success: false, massage:"the author not found "  });
    });

}


const  getAnArticleById  =(req,res)=>{
const articleId =req.params.id

    articlesModel.findById(articleId).populate("author" ," firstName").exec()
    .then((result) => {
      // if(!result){
      //   return res.status(404).json({success:false , massage:`The article`});
      // }
      res.status(200).json({success:true , massage:`The article => ${articleId}` , articles : result});
    })
    .catch((err) => {
        res.status(500).json({success: false, massage:"The Article Not Found "  });
    });

}

 const updateAnArticleById  =(req,res)=>{

  const articleid = req.params.id
// console.log(articleid)
  articlesModel.findByIdAndUpdate({_id:articleid} , req.body).then((result)=>{
    // console.log(result)
    res.status(200).json({success:true , massage:`success article updated`, articles : result});
   }).catch((error)=>{
    // console.log(error)
    res.status(404).json({success: false, massage:"The Article Not Found "  });
  })
 }
const  deleteArticleById =(req,res)=>{ 
  const articleid = req.params.id
  articlesModel.findByIdAndDelete({_id:articleid}).then((result)=>{
    // console.log(result)
    res.status(200).json({success:true , massage:` Success Delete article with id => ${articleid}`, articles : result});
   }).catch((error)=>{
    // console.log(error)
    res.status(404).json({success: false, massage:`Not Found atricle with id => ${articleid}`});
  })

}
const  deleteArticlesByAuthor =(req,res)=>{ 
  const author = req.body.author 
  articlesModel.deleteMany({author:author}).then((result)=>{
    // console.log(result)
    res.status(200).json({success:true , massage:` Success delete all the articles for the author=> ${author}`, result : result});
   }).catch((error)=>{
    // console.log(error)
    res.status(404).json({success: false, massage:`Success delete all the articles for the author => ${author}`});
  })

}


 
 



 module.exports = {createNewArticle 
  ,getAllArticles ,getArticlesByAuthor 
  ,getAnArticleById  ,updateAnArticleById,
  deleteArticleById ,deleteArticlesByAuthor}