import { RequestHandler } from "express";
import BlogPostModel from "../model/blog-post";

export const getAllBlogPosts: RequestHandler = async (req, res) => {
  try {
    const allBlogPosts = await BlogPostModel.find().exec();
    res.status(200).json(allBlogPosts);
  } catch (error) {
    res.status(500).json(error);
  }
};

interface BlogPostBody {
  slug: string;
  title: string;
  summary: string;
  body: string;
}

export const createBlogPost: RequestHandler<
  unknown,
  unknown,
  BlogPostBody,
  unknown
> = async (req, res) => {
  const { body, slug, summary, title } = req.body;
  try {
    const post = await BlogPostModel.create({ body, slug, summary, title });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
