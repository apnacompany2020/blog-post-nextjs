import { Button, Form, FormText } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { create } from "@/network/api/blog-post";

interface CreatePostFormData {
  title: "string";
  slug: "string";
  summary: "string";
  body: "string";
}
const CreateBlogPostPage = () => {
  const { register, handleSubmit } = useForm<CreatePostFormData>();

  const onSubmit: SubmitHandler<CreatePostFormData> = async (formData) => {
    try {
      const response = await create(formData);
      alert("Post created successfully" + JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="blog-title" className="mb-3">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control {...register("title")}></Form.Control>
      </Form.Group>

      <Form.Group controlId="blog-Slug" className="mb-3">
        <Form.Label>Blog Slug</Form.Label>
        <Form.Control {...register("slug")}></Form.Control>
      </Form.Group>

      <Form.Group controlId="blog-summary" className="mb-3">
        <Form.Label>Blog summary</Form.Label>
        <Form.Control as="textarea" {...register("summary")}></Form.Control>
      </Form.Group>

      <Form.Group controlId="blog-body" className="mb-3">
        <Form.Label>Blog body</Form.Label>
        <Form.Control as="textarea" {...register("body")}></Form.Control>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="mb-3"
        style={{ display: "flex" }}
      >
        <FormText>Create Post</FormText>
      </Button>
    </Form>
  );
};

export default CreateBlogPostPage;
