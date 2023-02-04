import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const results = await axios.get("http://localhost:8000/users");
    setuser(results.data.reverse());
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/Users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/Users/Edit/${user.id}`} >
                    Edit
                  </Link>
                  <Link class="btn btn-outline-danger">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
