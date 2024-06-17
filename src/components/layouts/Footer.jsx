import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/web/logo02.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./_footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <div className="footer-content">
          <div className="logo">
            <img src={footerLogo} alt="logo" />
          </div>
          <div className="footer-section">
            <h2>CÁC TRANG</h2>
            <br />
            <div className="social-icons">TRANG CHỦ</div>
            <div className="social-icons">VỀ CHÚNG TÔI</div>
            <div className="social-icons">LIÊN HỆ CHÚNG TÔI</div>
            <div className="social-icons">demo</div>
            <div className="icon">
              <FacebookIcon className="icon-con" />
              <InstagramIcon className="icon-con" />
              <YouTubeIcon className="icon-con" />
              <LocalPhoneIcon className="icon-con" />
            </div>
          </div>
          <div className="footer-section">
            <h2>THÔNG TIN</h2>

            <div className="hotline">
              <p>Đường dây nóng</p>
              <span>CN HCM: 0987654321 (phím 1)</span>
              <span>GÓP Ý: 0123456789 (phím 2)</span>
              <p>CƠ SỞ </p>
              <span>CN HCM: Nhà Văn Hóa Sinh Viên</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <strong>Flower website of Hoang Duc</strong>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
