//  import prisma from "../DB/db.config.js";
 import { Router } from "express";
 import { createUser, getALLUser, updateUser } from "../Controller/userController.js";

 const router = Router()
 
 router.post("/", createUser);
 router.put("/:id", updateUser);
 router.get("/getUer" , getALLUser);

 export default router;