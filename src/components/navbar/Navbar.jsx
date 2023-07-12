//React Router DOM
import { Link } from "react-router-dom";
//Icons
import { FaBars, FaTimes } from "react-icons/fa";
//UseState
import { useState } from "react";
//Css
import "./navbar.css";

const Navbar = () => {
  const [handleMenu, setHandleMenu] = useState(false);

  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
        <ul className={handleMenu ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      <div className="hamburger-menu">
        {handleMenu ? (
          <FaTimes
            onClick={() => setHandleMenu(!handleMenu)}
            size={20}
            style={{ color: "#fff", cursor: "pointer" }}
          />
        ) : (
          <FaBars
            onClick={() => setHandleMenu(!handleMenu)}
            size={20}
            style={{ color: "#fff", cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
