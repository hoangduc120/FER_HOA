import {
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import "./_contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact-section">
      <Container maxWidth="md">
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} md={10}>
            <div className="wrapper">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Paper className="contact-wrap">
                    <Typography variant="h5" gutterBottom>
                      Gửi cho chúng tôi một tin nhắn
                    </Typography>
                    <form id="contactForm">
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Tên"
                            name="name"
                            variant="outlined"
                            className="form-control"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            variant="outlined"
                            className="form-control"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Chủ đề"
                            name="subject"
                            variant="outlined"
                            className="form-control"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Tin nhắn"
                            name="message"
                            variant="outlined"
                            multiline
                            rows={6}
                            className="form-control"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Link to={"#"}>
                            <Button
                              fullWidth
                              type="submit"
                              variant="contained"
                              color="primary"
                              className="btn btn-primary"
                            >
                              Gửi tin nhắn
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} container alignItems="stretch">
                  <Box className="info-wrap">
                    <Typography variant="h5" gutterBottom>
                      Liên hệ với chúng tôi
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Chúng tôi mở cửa cho mọi đề xuất hoặc chỉ để trò chuyện
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box className="icon-box">
                        <span className="fa fa-map-marker" />
                      </Box>
                      <Typography variant="body1">
                        <strong>Địa chỉ:</strong> 198 West 21th Street, Suite
                        721 New York NY 10016
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box className="icon-box">
                        <span className="fa fa-phone" />
                      </Box>
                      <Typography variant="body1">
                        <strong>Điện thoại:</strong>{" "}
                        <a href="tel://123456789">+1235 2355 98</a>
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box className="icon-box">
                        <span className="fa fa-paper-plane" />
                      </Box>
                      <Typography variant="body1">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Box className="icon-box">
                        <span className="fa fa-globe" />
                      </Box>
                      <Typography variant="body1">
                        <strong>Website:</strong> <a href="#">yoursite.com</a>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
