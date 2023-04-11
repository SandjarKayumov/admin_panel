import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ModalEditUser.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { Button } from "@mui/material";

const ModalEditUser = ({ id, editUser }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.data);
    setUser(res);
  };

  // if(!user) return;

  return (
    <div className="user-modal">
      <h2>
        <EditOutlinedIcon fontSize="small" />
        &nbsp;Edit User
      </h2>
      <div>
        <label>
          <strong>Name:</strong>
        </label>
        <input
          type="text"
          className="user-modal__field"
          value={user ?  user.name : ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <br />
      <div>
        <label>
          <strong>Username:</strong>
        </label>
        <input
          type="text"
          className="user-modal__field"
          value={ user ?  user.username : ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, username: e.target.value }))
          }
        />
      </div>
      <br />
      <div>
        <label>
          <strong>Email:</strong>
        </label>
        <input
          type="email"
          className="user-modal__field"
          value={ user ? user.email : ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <br />
      <div>
        <label>
          <strong>Address:</strong>
        </label>
        <input
          type="text"
          className="user-modal__field"
          value={ user ? user.address.city : ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, address: { city: e.target.value } }))
          }
        />
      </div>
      <Button
        variant="contained"
        className="save-user__btn"
      >
        <SaveAsOutlinedIcon />
        &nbsp;Save
      </Button>
    </div>
  );
};

export default ModalEditUser;
