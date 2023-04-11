import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
import Users from "../../components/User/User";
import "./UserListPage.scss";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CreateUserModal from "../../components/ModalNewUser/ModalNewUser";
import { Button } from "@mui/material";
import Loader from "../../components/Loader/Loader";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";

const UserListPage = () => {
  // const [users, setUsers] = useState([])
  // const usersURL = "https://jsonplaceholder.typicode.com/users";

  // useEffect(()=>{
  //   axios.get(usersURL).then((response)=>{
  //     setUsers(response.data)
  //   });
  // },[]);

  // if(!users)  return null;

  // const createUser = (user) => {
  //   setUsers(prev => [user, ...prev])
  // }
  const [users, setUsers] = useState([]);
  const usersURL = "https://jsonplaceholder.typicode.com/users";
  const [modalCreateUser, setModalCreateUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPagination, setPagination] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(usersURL).then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);
  
  // if (!users) return null;

  const editUser = (user) => {
    setUsers((prev) => {
      const cloneUsers = [...prev];
      const foundUser = cloneUsers.findIndex((i) => i.id === user.id);
      if (foundUser || foundUser === 0) {
        cloneUsers.splice(foundUser, 1, user);
      }
      console.log(cloneUsers);
      return cloneUsers;
    });
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((i) => i.id !== id));
  };

  const createUser = (user) => {
    console.log(user);
    setUsers((prev) => [{ ...user, id: Math.random() + 10 }, ...prev]);
    setModalCreateUser(false);
  };


  return (
    <div>
      <div className="userlist__page_top">
        <h2 className="page__title">user list</h2>
        <Button
          variant="contained"
          className="create__user_btn"
          onClick={() => setModalCreateUser(true)}
        >
          <PersonAddAltOutlinedIcon fontSize="medium" />
          &nbsp;new user
        </Button>
      </div>
      <div className="search__items">
        <input type="text" placeholder="Search..." />{" "}
        <SearchIcon style={{ color: "#808080", cursor: "pointer" }} />
      </div>
      <div className="userlist__page">
        {isLoading && <Loader />}
        {users.length >= 1 ? (
          <Users users={users} editUser={editUser} deleteUser={deleteUser} />
        ) : (
          <h2
            style={{
              color: "rgb(255, 0, 0)",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            No Users!
          </h2>
        )}
      </div>


      {modalCreateUser && (
        <Modal handleModal={() => setModalCreateUser(false)}>
          <CreateUserModal createUser={createUser} />
        </Modal>
      )}
      <Pagination className="pagination__center" color="primary" count="3" /> 
    </div>
  );
};

export default UserListPage;
