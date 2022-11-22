import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CRUD APPLICATION
          </Link>
          <div className="Button_Register">
          <Link className="btn btn-outline-light" to="/adduser">
            Register 
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
