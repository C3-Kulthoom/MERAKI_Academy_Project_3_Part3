// const Comment = require("../../db/models/commentsschema");
const commentsModel = require("../../db/models/commentsschema");
const createNewComment= (req,res)=>{
const comment = req.body.comment
const commenter = req.body.commenter
const newComment = new commentsModel({
    comment,
    commenter
})


newComment.save().then((result) => {
   console.log(result)
    res
      .status(201)
      .json({
        success: true,
        massage: "the new comment added",
        commenter : result
      });
  })
  .catch((error) => {
    res.status(500).json({ success: false, massage: "server error" });
  });


}

  module.exports ={ createNewComment} 