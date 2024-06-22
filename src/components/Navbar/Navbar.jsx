import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../context/AuthContext";
import "./_navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const location = useLocation();
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAdminClick = async () => {
    if (!user) {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.error("Lỗi khi đăng nhập bằng Google", error);
      }
    } else {
      navigate("/admin");
    }
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
        <Link to="/news">
          <p
            className={`${activeTab === "/news" ? "active" : ""}`}
            onClick={() => setActiveTab("/news")}
          >
            News
          </p>
        </Link>
        <Link to="/admin" onClick={handleAdminClick}>
          <p className={`${activeTab === "/admin" ? "active" : ""}`}>Admin</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
