import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Typography,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./_orchidDetail.scss";
import axios from "axios";

const OrchidDetail = () => {
  const { id } = useParams();
  const [openDialog, setOpenDialog] = useState(false); // State để theo dõi trạng thái mở/closed của dialog
  const [orchid, setOrchid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://664eb874fafad45dfae0e1bc.mockapi.io/orchids/${id}`)
      .then((res) => {
        setOrchid(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (!orchid) {
    return <div>Orchid not found</div>;
  }
  // Hàm lấy video ID từ đường dẫn YouTube
  const getYouTubeId = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]+)/
    );
    return (match && match[1]) || null;
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!orchid) {
    return <div>Orchid not found</div>;
  }

  // Lấy video ID từ đường dẫn video của orchid
  const youtubeId = getYouTubeId(orchid.video);
  return (
    <Paper elevation={3} className="orchid-detail-container">
      <Typography variant="h5" gutterBottom className="orchid-title">
        {orchid.name}
      </Typography>
      <img src={orchid.image} alt={orchid.name} className="orchid-image" />
      <Typography variant="body1" className="orchid-text">
        Origin: {orchid.origin}
      </Typography>
      <Typography variant="body1" className="orchid-text">
        Color: {orchid.color}
      </Typography>
      <Typography variant="body1" className="orchid-text">
        Category: {orchid.category}
      </Typography>
      <Typography variant="body1" className="orchid-text">
        Rating: {orchid.rating} / 5
      </Typography>
      {orchid.isSpecial && (
        <Typography variant="body1" className="orchid-text">
          Special Orchid
        </Typography>
      )}
      <YouTubeIcon className="icon-youtube" onClick={handleOpenDialog} />

      <Button
        component={Link}
        to="/"
        color="primary"
        className="orchid-close-button"
      >
        Close
      </Button>
      

      {/* Dialog để hiển thị video YouTube */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>YouTube Video</DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default OrchidDetail;
