import React, { useState } from "react";
import "./Header.scss";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
const Header = ({ handleSidebar }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__inner">
          <div className="header-menu__btn" onClick={handleSidebar}>
            <MenuIcon fontSize="medium" className="menu__btn" />
          </div>
          <div className="login__lang">
            <NavLink to="/login-page">
              <LogoutIcon fontSize="small" style ={{marginRight:"5px"}} />
               Login 
            </NavLink>
            <select className="header-select__lang">
              <option value="en">English </option>
              <option value="ru">Russian</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
