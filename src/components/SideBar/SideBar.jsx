import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import "./SideBar.scss";
import GroupIcon from "@mui/icons-material/Group";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import CommentIcon from "@mui/icons-material/Comment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import ListIcon from '@mui/icons-material/List';

const SideBar = ({ isOpen }) => {
  const categories = [
    { id: 1, title: "Users", url: "/user-list", icon:  <GroupIcon/>},
    { id: 2, title: "Posts", url: "/post-list" , icon: <PostAddIcon/>},
    { id: 3, title: "Albums", url: "/album-list", icon: <PhotoLibraryIcon/> },
    { id: 4, title: "Report", url: "/reports" , icon: <CalendarMonthIcon/>},
    { id: 5, title: "Users 2", url: "/user-list-two" , icon: <GroupIcon/>},
    { id: 6, title: "Pokemon", url: "/pokemon-list" ,},
  ];
  return (
    <aside className={cn("sidebar", { active: isOpen })}>
      <div className="sidebar__logo">
        <Link to="/">
          <span>Admin</span>&nbsp;Panel
        </Link>
      </div>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id}><Link to={category.url}>{category.icon && category.icon}&nbsp;&nbsp;&nbsp;{category.title}</Link></li>
          ))}

          {/* <li>
            <NavLink to="/user-list">
              <GroupIcon />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/post-list">
              <PostAddIcon />
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/album-list">
              <PhotoLibraryIcon />
              Albums
            </NavLink>
          </li>
          <li>
            <Accordion style={{ backgroundColor: "#2B3139", color: "#fff" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <CalendarMonthIcon /> All Reports
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Link to="/reports">Report 1</Link>
                  <Link to="/reports">Report 2</Link>
                  <Link to="/reports">Report 3</Link>
                  <Link to="/reports">Report 4</Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </li>
          <li>
            <Link to="/user-list-two">
              <GroupIcon />
              Users № 2
            </Link>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
