import { Link } from "react-router-dom";

export default function ManagePosts() {
  // get posts from local storage
  const posts = JSON.parse(localStorage.getItem("posts"));
  return (
    <div className="container mx-auto my-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Posts</h1>
        <div className="text-end">
          <Link to="/manage-posts-add" className="btn btn-primary btn-sm">
            Add New Post
          </Link>
        </div>
      </div>
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts
              ? posts.map((post) => {
                  return (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>
                        <span className="badge bg-warning">{post.status}</span>
                      </td>
                      <td className="text-end">
                        <div className="buttons">
                          <Link
                            to="/post"
                            target="_blank"
                            className="btn btn-primary btn-sm me-2"
                          >
                            <i className="bi bi-eye"></i>
                          </Link>
                          <Link
                            to="/manage-posts-edit"
                            className="btn btn-secondary btn-sm me-2"
                          >
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <Link to="/" className="btn btn-danger btn-sm">
                            <i className="bi bi-trash"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/dashboard" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
