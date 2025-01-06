import prisma from "../DB/db.config.js";

/********************** CREATE USER ******************************** */
export const createUser = async (req,res)=>{
  //Taking all the details field by the user
  const { name, email, password } = req.body;

  //Checking if the user already exist
  const findUser = await prisma.user.findUnique({
    // where: denotes kiske basis pe find krna hai
    where: {
      email: email, // this email value is from the req body
    },
  });
  if (findUser) {
    return res.json({
      status: 400,
      message: "Email already in use, try differnt Email",
    });
  }

  //Create a new User using Prisma client
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  //SENDING the response
  return res.json({
    status: 200,
    data: newUser,
    message: "User Created successfully",
  });
}

/********************** UPDATE USER ******************************** */
export const updateUser = async function(req,res){
  //Taking all the details field by the user
  const { name, email, password } = req.body;
  // Extracting the user ID from the route parameters (passed as a string)
  const id = req.params.id;

  //Updating the user using Prisma client
  await prisma.user.update({
    where: {
      id: Number(id), // Converting the string ID to a number, as Prisma expects the ID in number format
    },
    data: {
      name, // Updating the user's name
      email, // Updating the user's email
      password, // Updating the user's password
    },
  });

  return res.json({ status: 200, message: "User updated Successfully" });
}

/*************************** getALL USER ***************************/ 
export const getALLUser = async function(req, res){

  // Fetching all users using Prisma client
  const users = await prisma.user.findMany({})

   return res.json({
     status: 200,
     data: users,
     message: "fetched all users succcessfully",
   });

 
}