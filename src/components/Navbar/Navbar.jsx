import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.jpg";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        <Link to="/" className="logo-section">
          <img src={logo} alt="ISTE Logo" className="logo" />

          <div>
            <h2>ISTE SFIT</h2>
            <span>Student Chapter</span>
          </div>
        </Link>

        <div className="nav-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/team">Team</NavLink>

          <NavLink to="/faq">FAQs</NavLink>

          <NavLink to="/contact">Contact ✉</NavLink>

        </div>

      </nav>
    </header>
  );
}