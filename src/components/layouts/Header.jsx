import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import headerLogo from "../../assets/web/logo02.jpg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import "./_header.scss";

function Header() {
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
      <div className="header_icon_right">
        <SearchIcon />
        <PersonIcon />
      </div>
    </header>
  );
}

export default Header;
