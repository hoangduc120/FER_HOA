/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./_admin.scss";
function Admin() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState();

  // const addProduct = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("https://664eb874fafad45dfae0e1bc.mockapi.io/orchids", {
  //       name: e.target.name.value,
  //       origin: e.target.origin.value,
  //       color: e.target.color.value,
  //       category: e.target.category.value,
  //       image: e.target.image.value,
  //       rating: e.target.rating.value,
  //       isSpecial: e.target.isSpecial.value,
  //     });
  //     alert("Successfully added ");
  //   } catch (error) {
  //     alert("Error!");
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    axios
      .get("https://664eb874fafad45dfae0e1bc.mockapi.io/orchids")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (id) => {
    console.log(id);
    axios
      .put(`https://664eb874fafad45dfae0e1bc.mockapi.io/orchids/${id}`, editId)
      .then((res) => {
        alert("Data updated susccessfully!");
      });
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="container">
        <div className="button-add">
          Add +
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
                <td>{item.rating}</td>
                <td>{item.isSpecial}</td>
                <td>
                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      handleEdit(item.id);
                      setEditId(item.id);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </Button>
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
