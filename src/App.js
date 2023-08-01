import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Dashborad from "./pages/dashboard";
import ManagePosts from "./pages/manage-posts";
import ManagePostsAdd from "./pages/manage-posts-add";
import ManagePostsEdit from "./pages/manage-posts-edit";
import Posts from "./pages/post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashborad />} />
        <Route path="/manage-posts" element={<ManagePosts />} />
        <Route path="/manage-posts-add" element={<ManagePostsAdd />} />
        <Route path="/manage-posts-edit" element={<ManagePostsEdit />} />
        <Route path="/post" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
