import { Link, useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  // load all the posts
  const posts = JSON.parse(localStorage.getItem("posts"));
  const post = posts
    ? posts.find((p) => parseInt(p.id) === parseInt(id))
    : null;

  return (
    <div className="container mx-auto my-5">
      <h1 className="h1 mb-4 text-center">{post ? post.title : null}</h1>
      <p>Post ID: {id}</p>
      <p>{post ? post.content : null}</p>

      <div className="text-center mt-3">
        <Link to="/" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}
