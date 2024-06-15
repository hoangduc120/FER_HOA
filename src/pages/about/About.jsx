// src/About.jsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to Orchid Store! We are passionate about orchids and aim to provide the best selection of these beautiful flowers to our customers. Our team is dedicated to offering top-quality orchids and exceptional customer service.
      </Typography>
    </Container>
  );
};

export default About;
