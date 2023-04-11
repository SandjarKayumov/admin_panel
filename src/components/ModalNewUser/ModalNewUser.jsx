import React, { useState } from "react";
import "./ModalNewUser.scss";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { Button } from "@mui/material";

const ModalNewUser = ({ createUser }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      createNewUser();
    }
  };
  const createNewUser = () => {
    const user = {
      name,
      username: userName,
      email,
      address: {
        city: address,
      },
    };
    createUser(user);
  };

  return (
    <div>
      <div className="create-user-modal">
        <div className="create-user__content">
          <h2 className="">
            <PersonAddAltOutlinedIcon /> &nbsp;New User
          </h2>
          <div>
            <label>
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              className="create-user-modal__field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>
              <strong>Username:</strong>
            </label>
            <input
              type="text"
              className="create-user-modal__field"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              className="create-user-modal__field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>
              <strong>Address:</strong>
            </label>
            <input
              type="text"
              className="create-user-modal__field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            className="create-user__btn"
            onKeyDown={handleKeyDown}
            onClick={createNewUser}
          >
            <SaveAsIcon fontSize="small" />
            &nbsp; Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalNewUser;
