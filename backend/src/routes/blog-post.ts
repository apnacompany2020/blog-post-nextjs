import express from "express";
import * as BlogPostController from "../controller/blog-post";
const routes = express.Router();

routes.get("/", BlogPostController.getAllBlogPosts);
routes.post("/", BlogPostController.createBlogPost);

export default routes;
