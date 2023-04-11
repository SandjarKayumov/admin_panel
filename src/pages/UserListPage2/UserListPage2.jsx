import ReactDeleteIcon, { useEffect, useState } from "react";
import "./UserListPage2.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUserAction } from "../../store/usersReducer";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { Button, Pagination } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Modal from "../../components/Modal/Modal";
import CreateUserModal2 from "../../components/CreateUserModal2/CreateUserModal2";
import { Link } from "react-router-dom";
import EditUserModal from "../../components/EditUserModal2/EditUserModal";

const UserListPage2 = () => {
  // const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalCreateUser, setModalCreateUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [isPagination, setPagination] = useState(false);
  const dispatch = useDispatch();
  
  const users = useSelector((state) => state.users.users);

  // const usersURL = "https://jsonplaceholder.typicode.com/users";
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios.get(usersURL).then((response) => {
  //     setUsers(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  const deleteUser = (user) => {
    dispatch(deleteUserAction(user.id));
    console.log(user.id);
  };
  return (
    <>
      <div className="user__list_page">
        <div className="userlist__page_top">
          <h2 className="page__title">Users list 2</h2>
          <Button
            variant="contained"
            className="create__user_btn"
            onClick={() => setModalCreateUser(true)}
          >
            <PersonAddAltOutlinedIcon fontSize="medium" />
            &nbsp;create user
          </Button>
        </div>
        {users.length > 0 ? (
          <table id="users">
            <thead>
              <tr>
                <th>id</th>
                <th>username</th>
                <th>company name</th>
                <th style={{ textAlign: "center" }}>actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.company.name}</td>
                  <td className="actions" style={{ textAlign: "center" }}>
                    <button variant="contained" className="view__post_btn">
                      <Link to={`/user-detail/${user.id}`}>
                        <VisibilityIcon style={{ color: "#fff" }} />
                      </Link>
                    </button>
                    <button
                      className="edit__post_btn"
                      onClick={() => setModalEditUser(true)}
                    >
                      <EditIcon />
                    </button>
                    <button className="delete__post_btn">
                      <DeleteIcon onClick={() => deleteUser(user)} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ fontSize: "25px", color: "red", textAlign: "center" }}>
            No Users !
          </div>
        )}
      </div>
     
      {modalCreateUser && (
        <Modal handleModal={() => setModalCreateUser(false)}>
          <CreateUserModal2 />
        </Modal>
      )}
      {modalEditUser && (
        <Modal handleModal={() => setModalEditUser(false)}>
          <EditUserModal  />
        </Modal>
      )}
    </>
  );
};

export default UserListPage2;
