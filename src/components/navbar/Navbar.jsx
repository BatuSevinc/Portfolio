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
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={handleMenu ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={() => setHandleMenu(!handleMenu)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={() => setHandleMenu(!handleMenu)}>
            Project
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setHandleMenu(!handleMenu)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/resume" onClick={() => setHandleMenu(!handleMenu)}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setHandleMenu(!handleMenu)}>
            Contact
          </Link>
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
