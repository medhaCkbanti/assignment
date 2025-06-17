
import express from "express";
import { allBlogs, createBlogController, deleteBlog, editBlog } from "./blog.controller.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router() ;


router.post("/create-blog",verifyToken,createBlogController)
router.get("/blogs",verifyToken,allBlogs)
router.patch("/edit-blog/:id",verifyToken,editBlog)
router.delete("/:id",verifyToken,deleteBlog)

export default router ;