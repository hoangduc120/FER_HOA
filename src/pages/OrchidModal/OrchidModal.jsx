// OrchidModal.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ListOfOrchids from "../../components/datas/ListOfOrchids";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const OrchidModal = ({ open, onClose }) => {
  const { Id } = useParams();

  const orchid = ListOfOrchids.find((orchid) => orchid.Id === parseInt(Id));

  if (!orchid) {
    return <div>Orchid not found</div>;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{orchid.name}</DialogTitle>
      <DialogContent>
        <img
          src={orchid.image}
          alt={orchid.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <Typography variant="body1">Origin: {orchid.origin}</Typography>
        <Typography variant="body1">Color: {orchid.color}</Typography>
        <Typography variant="body1">Category: {orchid.category}</Typography>
        <Typography variant="body1">Rating: {orchid.rating} / 5</Typography>
        {orchid.isSpecial && (
          <Typography variant="body1">Special Orchid</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrchidModal;
