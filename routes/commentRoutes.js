import { Router } from "express";
import { createComment, deleteComment, getAllComment, showComment, updateComment } from "../Controller/commentController.js";

const router = Router();

router.post("/", createComment);
router.put("/:id", updateComment);
router.get("/show-comment/:id", showComment);
router.get("/get-comment", getAllComment);
router.delete("/delete-comment", deleteComment);

export default router;