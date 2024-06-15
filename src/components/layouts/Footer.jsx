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
          <div className="social-icons">Hướng Dẫn Đo Kích Thước Nhẫn</div>
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
            <p>Dường dây nóng</p>
            <span>CN HCM: 0987654321 (phím 1)</span>
            <span>GÓP Ý: 0123456789 (phím 2)</span>
            <p>CƠ SỞ </p>
            <span>CN HCM: Nhà Văn Hóa Sinh Viên</span>
          </div>
        </div>
        {/* <div className="footer-section">
          <h2>CHỨNG NHẬN</h2>
          <br />
          <div className="certificates">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/diamond-6401b.appspot.com/o/Logo%20Bo%20cong%20thuong.png?alt=media&token=c3ce7c08-8d52-4cd6-bb64-5f88585c698b"
              alt="bocongthuong"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/diamond-6401b.appspot.com/o/DMCA.png?alt=media&token=773286c0-7445-4281-a542-113d6c2632af"
              alt="dmca"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/diamond-6401b.appspot.com/o/GIA.png?alt=media&token=fd8cb20a-4e42-4d36-9bb5-842562933cd8"
              alt="ISO 9001"
            />
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <strong>Flower website of Hoang Duc</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
