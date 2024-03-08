import express, { json } from "express";
import blogPostRoutes from "./routes/blog-post";

const app = express();
app.use(json());

app.use("/posts", blogPostRoutes);

export default app;
