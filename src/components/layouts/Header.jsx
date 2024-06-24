import { useState } from "react";
import headerLogo from "../../assets/web/logo02.jpg";
import PersonIcon from "@mui/icons-material/Person";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./_header.scss";
import { IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div className="header_icon_left">
        <IconButton
          color="inherit"
          href="https://www.facebook.com/shinichikun120"
          target="_blank"
          sx={{
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://instagram.com"
          target="_blank"
          sx={{
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.youtube.com"
          target="_blank"
          sx={{
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <YouTubeIcon />
        </IconButton>
      </div>
      <div className="header_logo">
        <img src={headerLogo} alt="logo" />
      </div>
      <div>
        <div
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <IconButton
            color="inherit"
            sx={{
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <PersonIcon />
          </IconButton>
        </div>
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
            <Link
              to="/loginGG"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
