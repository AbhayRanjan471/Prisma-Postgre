//  import prisma from "../DB/db.config.js";
 import { Router } from "express";
 import { createUser, updateUser } from "../Controller/userController.js";

 const router = Router()
 
 router.post("/", createUser);
 router.put("/:id", updateUser);

 export default router;