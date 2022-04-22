import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div className="navbar-perso">
      <Logo />

      <div className="nav-links">
        <Link className="home-link" to="/">
          Home
        </Link>
        <Link className="project-link" to="/project">
          Projects
        </Link>
      </div>
    </div>
  );
}
