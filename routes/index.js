import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";
import { Router } from "express";

const router = Router();

router.use("/api/user", userRoutes);
router.use("/api/post", postRoutes);

export default router;
