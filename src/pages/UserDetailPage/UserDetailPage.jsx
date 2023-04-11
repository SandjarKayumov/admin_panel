import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import "./UserDetailPage.scss";
import axios from "axios";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { Button } from "@mui/material";

const UserDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    if (!id) return;
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.data);
    setData(res);
    console.log(res.data);
  };
  if (!data) return;

  return (
    <div>
      <h2 className="page__title">User detail</h2>
      <div className="user__profile">
        <div className="user__profile_items">
          <div className="user__profile_item">
            <div><PersonOutlineOutlinedIcon />&nbsp;User profile ID:</div>
            <div><BadgeOutlinedIcon /> &nbsp;Full Name:</div>
            <div><HomeOutlinedIcon /> &nbsp;Address:</div>
            <div><SignpostOutlinedIcon /> &nbsp;Street:</div>
            <div>Suite:</div>
            <div><LocationCityOutlinedIcon />&nbsp;City:</div>
            <div><AttachEmailOutlinedIcon />&nbsp;Zipcode:</div>
            <div><LocalPhoneOutlinedIcon />&nbsp;Phone:</div>
            <div><AlternateEmailOutlinedIcon />&nbsp;Website:</div>
            <div><ApartmentOutlinedIcon />&nbsp;Company Name:</div>
            <div>Company Catch Phrase:</div>
            <div>Company bs:</div>
          </div>
          <div className="user__profile_item">
            <div><strong>{data.id}</strong>
            </div><div>{data.name}</div> 
            <div>{data.address.street}</div>
              <div>{data.address.suite}</div>
              <div>{data.address.city}</div>
              <div>{data.address.zipcode}</div>
              <div>{data.phone}</div>
              <div>{data.website}</div>
              <div>{data.company.name}company.name </div>
              <div>{data.company.catchPhrase} </div>
              <div>{data.company.bs}</div>
          </div>
        </div>
      </div>
      <Link to="/user-list"  style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Button variant="contained">back to all users</Button></Link>
    </div>
  );
};

export default UserDetailPage;
