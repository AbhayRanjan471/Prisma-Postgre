import prisma from "../DB/db.config.js";

/**8**************************** CREATE POST ************************* */
export const createPost = async function(req,res){
  // Destructuring user_id, description, and title from the request body
  const { user_id, description, title } = req.body;

  //Create a new Post using Prisma client
  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });

  return res.json({
    status: 200,
    data: newPost,
    message: "Post created Successfully",
  });
}

/******************************** SHOW Post ****************************** */
export const showPost = async function(req,res){
    const postId = req.params.id;

    const post = await prisma.post.findUnique({
        where: {
            id:Number(postId) 
        }      
    })

    return res.json({
        status:200,
        data:post,
        message: "found the post"
    })   
}

/**************************** UPDATE POST ***************************** */
export const updatePost = async function(req,res){
    const {title,description} = req.body;
    //getting Id of the post which we want to update, send by the user in the URL
    const postId = req.params.id;

    await prisma.post.update({
        where:{
            id:Number(postId)
        },
        data: {
            title:title,
            description:description
        }
    })

    return res.json({
        status:200,
        message:"Post updated Scuccessfully"
    })
}

/************************** getALL Post **************************************** */
export const getAllPost = async function(req,res){

    const posts = await prisma.post.findMany({
      //this will also include the comment related to this particular post
      include: {
        comment: {
          select: {
            comment: true, // Fetch only the comment 
            user: {
              select: {
                name: true, // Fetch only the name of the user who made the comment
              },
            },
          },
        },
      },
      orderBy:{  //to gett all the details in decending order
        id:"desc"
      }
    });

    return res.json({
        status: 200,
        data: posts,
        message: "found all post"
    })
}

/************************ DELETE Post ***************************************** */
export const deletePost = async function(req,res){
    const postId = req.params.id;

    await prisma.post.delete({
        where:{
            id:Number(postId)
            }
        })

        return res.json({status:200, message:"Post deleted successfully"})
}