import { Link } from "react-router-dom";
import "./Navbar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/project">Projects</Link>
    </nav>
  );
}
