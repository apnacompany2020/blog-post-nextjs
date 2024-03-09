import { BlogPost } from "@/models/BlogPost";
import api from "@/network/axiosInstance";

interface CreateBlogPostValues {
  title: "string";
  slug: "string";
  summary: "string";
  body: "string";
}
export const create = async (input: CreateBlogPostValues) => {
  const response = await api.post<BlogPost>("posts", input);
  return response.data;
};
