import { useEffect, useState } from "react";
import "./_navbar.scss";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { UserAuth } from '../context/AuthContext';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/contact") {
      setActiveTab("Contact");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    } else if (location.pathname === "/admin") {
      setActiveTab("Admin");
    } else if (location.pathname === "/news") {
      setActiveTab("News");
    }
  }, [location]);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);

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
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/contact">
          <p
            className={`${activeTab === "Contact" ? "active" : ""}`}
            onClick={() => setActiveTab("Contact")}
          >
            Contact
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
        <Link to="/news">
          <p
            className={`${activeTab === "News" ? "active" : ""}`}
            onClick={() => setActiveTab("News")}
          >
            News
          </p>
        </Link>
        {isAdmin && (
          <Link to="/admin">
            <p
              className={`${activeTab === "Admin" ? "active" : ""}`}
              onClick={() => setActiveTab("Admin")}
            >
              Admin
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
