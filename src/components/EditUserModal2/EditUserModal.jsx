import React,{useState, useEffect}from "react";
// import "./EditUserModal.scss";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";

const EditUserModal = ({id}) => {
  // const [name, setName] = useState("");
  // const [username, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [street, setStreet] = useState("");
  // const [suite, setSuite] = useState("");
  // const [city, setCity] = useState("");
  // const [zipcode, setZipcode] = useState("");
  // const [phone, setPhone] = useState("");
  // const [companyName, setCompanyName] = useState("");
  const [user, setUser] = useState(null)

  useEffect(() => {
     getUser()
  }, [id]);

  const getUser= async () => {
    const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.data)
    setUser(res)
  }

  if(!user) return;

  return (
    <div className="create-user-modal2">
      <div className="create-user__content2">
        <h2 className="">
          <EditIcon /> &nbsp;Edit User
        </h2>
        <div style={{display:"flex", justifyContent:"space-between"}} >
          <div style={{marginRight:"10px"}}>
            <input className="create-user-modal2__field" type="text" value={user.name} placeholder=" name" onChange={e => setUser(prev => ({...prev, name: e.target.value}))}/>
            <input className="create-user-modal2__field" type="text" value={user.username} placeholder=" username"  onChange={e => setUser(prev => ({...prev, username: e.target.value}))}/>
            <input className="create-user-modal2__field" type="email" value={user.email} placeholder=" email"  onChange={e => setUser(prev => ({...prev, email: e.target.value}))}/>
            {/* <input className="create-user-modal2__field" type="text" value={user.address}placeholder=" address"  onChange={e => setUser(prev => ({...prev, address: e.target.value}))} /> */}
            <input className="create-user-modal2__field" type="text" value={user.address.street} placeholder=" street" onChange={e => setUser(prev => ({...prev, street: e.target.value}))}/>
          </div>
          <div>
            <input className="create-user-modal2__field" type="text" value={user.address.suite} placeholder=" suite"  onChange={e => setUser(prev => ({...prev, suite: e.target.value}))}/>
            <input className="create-user-modal2__field" type="text" value={user.address.city}   placeholder=" city" onChange={e => setUser(prev => ({...prev, city: e.target.value}))}/>
            <input className="create-user-modal2__field" type="text" value={user.address.zipcode}placeholder=" zipcode"  onChange={e => setUser(prev => ({...prev, zipcode: e.target.value}))}/>
            <input className="create-user-modal2__field" type="text" value={user.phone} placeholder=" phone"  onChange={e => setUser(prev => ({...prev, phone: e.target.value}))}/>
            <input className="create-user-modal2__field" type="text" value={user.companyName} placeholder=" company name"  onChange={e => setUser(prev => ({...prev, name: e.target.value}))}/>
          </div>
        </div>
          <Button variant="contained" className="create-user__btn "><SaveIcon/>save</Button>
      </div>
    </div>
  );
};

export default EditUserModal;
