import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [avatar, setAvatar] = useState();
  const [values, setValues] = useState({
    name: "",
    email: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // cleanup
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("https://664eb874fafad45dfae0e1bc.mockapi.io/orchids", values)
      .then((res) => {
        console.log(res);
        navigate("/admin")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <h1>Add</h1>
        <form onSubmit={"dùng formik" + handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="name"
              className="form-control"
              onChange={handlePreviewAvatar}
            />
            {avatar && <img src={avatar.preview} alt="" width="20%" />}
          </div>
          <button>Submit</button>
          <Link to={"/admin"}>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
