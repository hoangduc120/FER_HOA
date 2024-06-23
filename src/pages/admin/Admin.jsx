/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./_admin.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
function Admin() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://664eb874fafad45dfae0e1bc.mockapi.io/orchids")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      axios
        .delete(`https://664eb874fafad45dfae0e1bc.mockapi.io/orchids/${id}`)
        .then((res) => {
          toast.success("Data delete susccessfully!");
          fetchData();
        })
        .catch((error) => {
          toast.error("Error deleting!");
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="button-add">
          <Link to={"/create"}>
            <Button variant="contained" color="primary">
              Add +
            </Button>
          </Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Origin</th>
              <th>Color</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              <th>IsSpecial</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.origin}</td>
                <td>{item.color}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>
                  {" "}
                  <Rating name="read-only" value={item.rating} readOnly />
                </td>
                <td>{item.isSpecial ? "True" : "False"}</td>
                <td>
                  <div className="button-container">
                    <Button
                      component={Link}
                      to={`/update/${item.id}`}
                      variant="contained"
                      color="warning"
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={(e) => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
