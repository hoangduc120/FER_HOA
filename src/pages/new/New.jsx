// src/News.jsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const News = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        News
      </Typography>
      <Typography variant="body1">
        Stay tuned for the latest news and updates about orchids, upcoming events, and new arrivals at our store.
      </Typography>
    </Container>
  );
};

export default News;
