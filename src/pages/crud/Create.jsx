import axios from "axios";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

function Create() {

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      origin: "",
      color: "",
      category: "",
      rating: "",
      isSpecial: false,
      video: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      image: Yup.string().required("Image is required").url("Invalid URL format"),
      origin: Yup.string().required("Origin is required"),
      color: Yup.string().required("Color is required"),
      category: Yup.string().required("Category is required"),
      isSpecial: Yup.boolean().required("IsSpecial is required"),
      rating: Yup.number()
        .required("Required")
        .min(1, "Min rating is 1")
        .max(5, "Max rating is 5"),
      video: Yup.string()
        .url("Invalid URL format")
        .required("Video URL is required"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      axios
        .post("https://664eb874fafad45dfae0e1bc.mockapi.io/orchids", values)
        .then((res) => {
          console.log(res);
          alert("Successfully added");
          navigate("/admin");
        })
        .catch((err) => {
          alert("Error! See the console for details");
          console.log(err);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box mb={3}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            id="color"
            name="color"
            label="Color"
            value={formik.values.color}
            onChange={formik.handleChange}
            error={formik.touched.color && Boolean(formik.errors.color)}
            helperText={formik.touched.color && formik.errors.color}
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            id="rating"
            name="rating"
            label="Rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
            error={formik.touched.rating && Boolean(formik.errors.rating)}
            helperText={formik.touched.rating && formik.errors.rating}
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            id="origin"
            name="origin"
            label="Origin"
            value={formik.values.origin}
            onChange={formik.handleChange}
            error={formik.touched.origin && Boolean(formik.errors.origin)}
            helperText={formik.touched.origin && formik.errors.origin}
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            id="category"
            name="category"
            label="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          />
        </Box>
        <Box mb={3}>
          <FormControlLabel
            control={
              <Switch
                checked={formik.values.isSpecial}
                onChange={formik.handleChange}
                name="isSpecial"
                color="primary"
              />
            }
            label="Is Special"
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            id="image"
            name="image"
            label="Image"
            value={formik.values.image}
            onChange={formik.handleChange}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            id="video"
            name="video"
            label="Video URL"
            value={formik.values.video}
            onChange={formik.handleChange}
            error={formik.touched.video && Boolean(formik.errors.video)}
            helperText={formik.touched.video && formik.errors.video}
          />
        </Box>
        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        <Button component={Link} to={"/admin"} fullWidth>
          Back
        </Button>
      </form>
    </Container>
  );
}

export default Create;
