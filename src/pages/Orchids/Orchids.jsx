// src/components/Orchids.jsx
import React from "react";
import { Link } from "react-router-dom";
import ListOfOrchids from "../../components/datas/ListOfOrchids";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const Orchids = () => {
  return (
    <Grid container spacing={4}>
      {ListOfOrchids.map((orchid) => (
        <Grid item xs={12} sm={6} md={4} key={orchid.Id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={orchid.image}
              alt={orchid.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {orchid.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Origin: {orchid.origin}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Color: {orchid.color}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {orchid.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {orchid.rating} / 5
              </Typography>
              {orchid.isSpecial && (
                <Typography variant="body2" color="text.secondary">
                  Special Orchid             
                </Typography>
              )}
            </CardContent>
            <CardActions>
              <Button  size="small" component={Link} to={`/orchid/${orchid.Id}`}>
                Detail
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Orchids;
