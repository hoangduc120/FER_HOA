import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./_login.scss";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    // onSubmit: async (values) => {
    //   try {
    //     const res = await axios.post(
    //       "https://664eb874fafad45dfae0e1bc.mockapi.io/Admin",
    //       {
    //         username: values.username,
    //         password: values.password,
    //       }
    //     );
    //     console.log(res.data);
    //     if (res.data && res.data.success) {
    //       toast.success("Đăng nhập thành công!");
    //       console.log("Đăng nhập thành công!");
    //     } else {
    //       toast.error("Đăng nhập thất bại: " + res.data.message);
    //       console.log("Đăng nhập thất bại!");
    //     }
    //   } catch (error) {
    //     toast.error("Đăng nhập thất bại: " + error.message);
    //   }
    // },
    onSubmit: async (values) => {
      try {
        const res = await axios.get(
          "https://664eb874fafad45dfae0e1bc.mockapi.io/Admin"
        );
        const admins = res.data;
        const admin = admins.find(
          (admin) =>
            admin.username === values.username &&
            admin.password === values.password
        );
        if (admin) {
          alert("Đăng nhập thành công!");
          localStorage.setItem("isAdmin", "true");

          navigate("/home");
        } else {
          alert("Đăng nhập thất bại!");
          console.log("Đăng nhập thất bại!");
        }
      } catch {
        alert("Đăng nhập thất bại!");
      }
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      password: Yup.string().required("Required."),
    }),
  });
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <TextField
              fullWidth
              variant="outlined"
              label="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </div>
          <div className="mb-3">
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ccac6c",
              "&:hover": { backgroundColor: "#45a049" },
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
