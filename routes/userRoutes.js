//  import prisma from "../DB/db.config.js";
 import { Router } from "express";
 import { createUser, deleteUser, getALLUser, showUser, updateUser } from "../Controller/userController.js";

 const router = Router()
 
 router.post("/", createUser);
 router.put("/:id", updateUser);
 router.get("/get-user" , getALLUser);
 router.get("/show-user/:id", showUser)
 router.delete("/delete-user/:id", deleteUser);

 export default router;