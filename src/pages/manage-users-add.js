import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


export default function ManageUsersAdd() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");


  const addUsers = () => {
    // 1. get the existing posts from the local storage
    let users = JSON.parse(localStorage.getItem("users"));

    /* 2. make sure the users is not empty 
        if users is empty, then assign the default array to it
      */
    if (!users) users = []; // assign default value to the users array

    // 3. push the new item into the users array
    users.push({
      id: Math.floor(Math.random() * 100000), // get random id
      name: name, // pass in the value from the name
      email: email, // pass in the value from the email
      role: role, // set the role to "user" as default value
    });

    // 4. save array into local storage
    localStorage.setItem("users", JSON.stringify(users));

    // 5. redirect back to /manage-users
    navigate("/manage-users");
  };
  return (
    <div className="container mx-auto my-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Add New User</h1>
      </div>
      <div className="card mb-2 p-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addUsers();
          }}
        >
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div className="mb-3">
            <div className="row">
              <div className="col">
                <label for="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="col">
                <label for="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
            </div>
          </div> */}
          <div className="mb-3">
            <label for="role" className="form-label">
              Role
            </label>
            <select className="form-control"
              id="post-status"
              value={role}
              onChange={(event) => {
                setRole(event.target.value);
              }}
            >
              <option value="">Select an option</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/manage-users" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Users
        </Link>
      </div>
    </div>
  );
}
