import { Router } from "express";
import { createPost, deletePost, getAllPost, showPost, updatePost } from "../Controller/postController.js";

const router = Router();

router.post("/" , createPost);
router.put("/:id", updatePost);
router.get("/get-post", getAllPost);
router.get("/show-post/:id", showPost);
router.delete("/delete-post/:id", deletePost);

export default router;