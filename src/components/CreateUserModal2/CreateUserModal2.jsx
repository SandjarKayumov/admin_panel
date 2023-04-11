import React,{useState, useEffect}from "react";
import "./CreateUserModal2.scss";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

const CreateUserModal2 = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="create-user-modal2">
      <div className="create-user__content2">
        <h2 className="">
          <PersonAddAltOutlinedIcon /> &nbsp;New User
        </h2>
        <div style={{display:"flex", justifyContent:"space-between"}} >
          <div style={{marginRight:"10px"}}>
            <input className="create-user-modal2__field" type="text" value={name} placeholder=" name" onChange={(e)=>setName(e.target.value)}/>
            <input className="create-user-modal2__field" type="text" value={username} placeholder=" username" onChange={(e)=>setUserName(e.target.value)}/>
            <input className="create-user-modal2__field" type="email" value={email} placeholder=" email" onChange={(e)=>setEmail(e.target.value)}/>
            <input className="create-user-modal2__field" type="text" value={address}placeholder=" address" onChange={(e)=>setAddress(e.target.value)} />
            <input className="create-user-modal2__field" type="text" value={street} placeholder=" street" onChange={(e)=>setStreet(e.target.value)}/>
          </div>
          <div>
            <input className="create-user-modal2__field" type="text" value={suite} placeholder=" suite" onChange={(e)=>setSuite(e.target.value)}/>
            <input className="create-user-modal2__field" type="text" value={city} placeholder=" city" onChange={(e)=>setCity(e.target.value)}/>
            <input className="create-user-modal2__field" type="text" value={zipcode}placeholder=" zipcode" onChange={(e)=>setZipcode(e.target.value)}/>
            <input className="create-user-modal2__field" type="text" value={phone} placeholder=" phone" onChange={(e)=>setPhone(e.target.value)}/>
            <input className="create-user-modal2__field" type="text" value={companyName} placeholder=" company name" onChange={(e)=>setCompanyName(e.target.value)}/>
          </div>
        </div>
          <Button variant="contained" className="create-user__btn "><SaveIcon/>save</Button>
      </div>
    </div>
  );
};

export default CreateUserModal2;
