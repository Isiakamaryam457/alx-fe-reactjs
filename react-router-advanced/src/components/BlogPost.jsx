import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); 

  return (
    <div>
      <h2>Blog Post</h2>
      <p>You are viewing blog post: {id}</p>
    </div>
  );
}

export default BlogPost;