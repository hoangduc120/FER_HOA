/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./_admin.scss";
function Admin() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState();

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
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="container">
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
