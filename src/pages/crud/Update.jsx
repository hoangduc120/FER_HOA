import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orchid, setOrchid] = useState({
    name: "",
    image: "",
    origin: "",
    color: "",
    category: "",
    rating: 0,
    isSpecial: false,
    video: "",
  });

  useEffect(() => {
    axios
      .get(`https://664eb874fafad45dfae0e1bc.mockapi.io/orchids/${id}`)
      .then((res) => setOrchid(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .put(`https://664eb874fafad45dfae0e1bc.mockapi.io/orchids/${id}`, values)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        alert("Update susccessfully!");
        // Redirect hoặc refresh data ở component chính
        navigate("/admin");
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    image: Yup.string()
      .required("Image URL is required")
      .url("Invalid URL format"),
    origin: Yup.string().required("Origin is required"),
    color: Yup.string().required("Color is required"),
    category: Yup.string().required("Category is required"),
    rating: Yup.number()
      .required("Rating is required")
      .min(1, "Min rating is 1")
      .max(5, "Max rating is 5"),
    video: Yup.string()
      .url("Invalid URL format")
      .required("Video URL is required"),
  });

  return (
    <div className="container">
      <h1>Update Orchid</h1>
      <Formik
        initialValues={orchid}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <Field
              as={TextField}
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={
                <ErrorMessage
                  name="name"
                  component="span"
                  style={{ color: "red" }}
                />
              }
            />
            <Field
              as={TextField}
              label="Origin"
              name="origin"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={
                <ErrorMessage
                  name="origin"
                  component="span"
                  style={{ color: "red" }}
                />
              }
            />
            <Field
              as={TextField}
              label="Color"
              name="color"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={
                <ErrorMessage
                  name="color"
                  component="span"
                  style={{ color: "red" }}
                />
              }
            />
            <Field
              as={TextField}
              label="Category"
              name="category"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={
                <ErrorMessage
                  name="category"
                  component="span"
                  style={{ color: "red" }}
                />
              }
            />
            <Field
              as={TextField}
              label="Image URL"
              name="image"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={
                <ErrorMessage
                  name="image"
                  component="span"
                  style={{ color: "red" }}
                />
              }
            />
            <Field
              as={TextField}
              type="number"
              label="Rating"
              name="rating"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={
                <ErrorMessage
                  name="rating"
                  component="span"
                  style={{ color: "red" }}
                />
              }
            />
            <Box mb={3}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.isSpecial}
                    name="isSpecial"
                    color="primary"
                    onChange={(e) =>
                      setFieldValue("isSpecial", e.target.checked)
                    }
                  />
                }
                label="Is Special"
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Update;
