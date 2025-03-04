// src/components/Orchids.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./_orchids.scss";
import axios from "axios";

const Orchids = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://664eb874fafad45dfae0e1bc.mockapi.io/orchids")
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={4} className="orchids-container">
      {data.map((orchid) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={orchid.id}
          className="orchid-item"
        >
          <Card className="orchid-card">
            <Link
              to={`/orchid/${orchid.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={orchid.image}
                alt={orchid.name}
              />
            </Link>
            <CardContent className="orchid-content">
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
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="span"
                >
                  Rating
                </Typography>
                <Rating name="rating" value={orchid.rating} readOnly />
              </Box>
              {orchid.isSpecial === "true" && (
                <Typography variant="body2" color="text.secondary">
                  Special Orchid
                </Typography>
              )}
            </CardContent>
            <CardActions className="orchid-actions">
              <Button
                size="small"
                component={Link}
                to={`/orchid/${orchid.id}`}
                className="orchid-detail-button"
              >
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
