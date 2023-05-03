import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./LoginPage.scss";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

console.log(username);
console.log(password);
  return (
    <div>
      <div className="overlay"></div>
      <div className="log__in">
        <h2 className="login__title">
          <AccountCircleIcon fontSize="large" />Login
        </h2>
        <div className="form">
          <form onSubmit={submitHandler}>
            {/* <label>Name:</label> */}
            <div>
              <input
                type="username"
                name="username"
                placeholder="Login"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <br />
            {/* <label>Password: </label> */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/">
              <div className="login__submit_btn">
                <Button variant="contained"><LoginIcon style={{ marginRight: "5px" }} />Enter</Button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
