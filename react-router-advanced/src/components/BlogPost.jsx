import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams(); 

  return (
    <div>
      <h2>Blog Post</h2>
      <p>You are viewing blog post: {postId}</p>
    </div>
  );
}

export default BlogPost;