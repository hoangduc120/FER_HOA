import footerLogo from "../../assets/web/logo02.jpg";
import { Facebook, Instagram, Twitter, LinkedIn} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import "./_footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-background">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={footerLogo} alt="logo" />
            </div>
            <div className="footer-section">
              <h2>CÁC TRANG</h2>
              <br />
              <div className="social-icons">TRANG CHỦ</div>
              <div className="social-icons">VỀ CHÚNG TÔI</div>
              <div className="social-icons">LIÊN HỆ CHÚNG TÔI</div>
              <Box sx={{ mt: 2 }} className="icon">
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
                  href="https://twitter.com"
                  target="_blank"
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.2)" },
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.2)" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
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
      </div>
    </>
  );
};

export default Footer;
