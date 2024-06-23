import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./_navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={`navbar-list ${isOpen ? "open" : ""}`}>
        <Link to="/">
          <p
            className={`${activeTab === "/" ? "active" : ""}`}
            onClick={() => setActiveTab("/")}
          >
            Home
          </p>
        </Link>
        <Link to="/contact">
          <p
            className={`${activeTab === "/contact" ? "active" : ""}`}
            onClick={() => setActiveTab("/contact")}
          >
            Contact
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "/about" ? "active" : ""}`}
            onClick={() => setActiveTab("/about")}
          >
            About
          </p>
        </Link>
        <Link to="/admin">
          <p className={`${activeTab === "/admin" ? "active" : ""}`}>Admin</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
