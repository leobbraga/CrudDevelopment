import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              <h5>Details of user</h5> 
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>ID: </b>
                  {user.id}
                  </li>
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username: </b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Password: </b>
                  {user.password}
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonHome">
          <Link className="btn btn-primary" to={"/"}>
            Back to Home
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
