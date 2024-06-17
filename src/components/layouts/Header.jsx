import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import headerLogo from "../../assets/web/logo02.jpg";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./_header.scss";

function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="header_icon_left">
        <FacebookIcon />
        <InstagramIcon />
        <LocationOnIcon />
      </div>
      <div className="header_logo">
        <img src={headerLogo} alt="logo" />
      </div>
      {/* <div className="header_icon_right">
        <MenuItem onClick={handleClose}>
          <PersonIcon />
          <Link to="/login" >
            {" "}
            Login
          </Link>
        </MenuItem>
      </div> */}
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <PersonIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose} className="header_icon_right">
            <div>
              {isAdmin ? (
                <div onClick={handleLogout} className="logout-icon">
                  Logout
                </div>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </Link>
              )}
            </div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              Profile
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
