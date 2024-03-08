import { InferSchemaType, Schema, model } from "mongoose";

// Create a Schema corresponding to the blog post document interface.
const blogPostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

// You can infer interface or type of the schema.
type BlogPost = InferSchemaType<typeof blogPostSchema>;

// create Blog Post model
export default model<BlogPost>("BlogPost", blogPostSchema);
