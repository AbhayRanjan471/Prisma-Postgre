import userRoutes from "./userRoutes.js";
import { Router } from "express";


const router = Router()

router.use("/api/user", userRoutes)


export default router;