import prisma from "../DB/db.config.js";

/**8**************************** CREATE COMMENT ************************* */
export const createComment = async function (req, res) {
  // Destructuring user_id, description, and title from the request body
  const { user_id, post_id, comment } = req.body;

//   Incrementing the coummnet count of a particular Post, usng the postId, whis commnt_count filed is availabe on 'Post' schema
await prisma.post.update({
  where: {
    id: Number(post_id),
  },
  data: {
    comment_count: {
      increment: 1, // Increment the comment count by 1
    },
  },
});

  //Create a new Post using Prisma client
  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      post_id: Number(post_id),
      comment: comment,
    },
  });

  return res.json({
    status: 200,
    data: newComment,
    message: "Comment created Successfully",
  });
};

/******************************** SHOW Comment ****************************** */
export const showComment = async function (req, res) {
  const commentId = req.params.id;

  const comments = await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
  });

  return res.json({
    status: 200,
    data: comments,
    message: "found the comment",
  });
};

/**************************** UPDATE Comment ***************************** */
export const updateComment = async function (req, res) {
  const { comment } = req.body;
  //getting Id of the post which we want to update, send by the user in the URL
  const commentId = req.params.id;

  await prisma.comment.update({
    where: {
      id: commentId, //Converting a UUID to a number with Number() will result in NaN, so we will directly giv it the cimmentId , check comment schema
    },
    data: {
      comment: comment,
    },
  });

  return res.json({
    status: 200,
    message: "Comment updated Scuccessfully",
  });
};

/************************** getALL Comment **************************************** */
export const getAllComment = async function (req, res) {
  const comments = await prisma.comment.findMany({
    include: {  //Nesting
        user: true,  // Include the comment related to which user, means which user has commented
        post: {    //Include the post details , which is under this comment
        include: {
            user: { //Include the user who has made the post
            select: {
                name: true, //// Fetch only the name of the user who made the comment
            },
            },
        },
        },
    },
  });

  return res.json({
    status: 200,
    data: comments,
    message: "found all comment",
  });
};

/************************ DELETE Comment ***************************************** */
export const deleteComment = async function (req, res) {
  const commentId = req.params.id;

  //decrement the comment_count when user delete the comment
  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        decrement: 1, // decrement the comment count by 1
      },
    },
  });

  await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });

  return res.json({ status: 200, message: "Comment deleted successfully" });
};
