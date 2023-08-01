import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ManagePosts from "./pages/manage-posts";
import ManagePostsAdd from "./pages/manage-posts-add";
import ManagePostsEdit from "./pages/manage-posts-edit";
import Post from "./pages/post";

/*
    / -> home
    /dashboard -> Dashboard
    /manage-posts -> manage posts

    if the post id is 4
    PHP:
    /post?id=4
    $_GET['id']

    REACT:
    /post/4
    
*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-posts-add" element={<ManagePostsAdd />} />
        <Route path="/manage-posts-edit" element={<ManagePostsEdit />} />
        <Route path="/manage-posts" element={<ManagePosts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
