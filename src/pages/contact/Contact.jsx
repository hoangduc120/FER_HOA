// src/Contact.jsx
import React from "react";
import { Typography, Container } from "@mui/material";
// import './Contact.css';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        If you have any questions, please feel free to contact us at:
      </Typography>
      <Typography variant="body1">Email: contact@orchidstore.com</Typography>
      <Typography variant="body1">Phone: +123 456 789</Typography>
      <Typography variant="body1">
        Address: 123 Orchid Lane, Flower City, FL 12345
      </Typography>
    </Container>
  );
};

export default Contact;
