import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.scss";
import Modal from "../Modal/Modal";
import EditUserModal from "../ModalEditUser/ModalEditUser";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";


const User = ({ users, editUser, deleteUser }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsClose, setModalIsClose] = useState(true);
  const [modalIsDetele, setModalIsDelete] = useState(false);
  const [userId, setUserId] = useState(null);

  const showEditModal = (id) => {
    setUserId(id);
    setModalIsOpen2(true);
  };
  const confirmUser = (user) => {
    editUser(user);
    setModalIsOpen2(false);
  };

  const showDeleteModal = (id) => {
    setUserId(id);
    setModalIsDelete(true);
  };
  const cofirmDeleteUser = () => {
    deleteUser(userId);
    setUserId(null);
    setModalIsDelete(false);
  };
  
  return (
    <>
      <ul>
        <div className="users-caption">
          <h4>Username</h4>
          <h4>Email</h4>
          <h4>Actions</h4>
        </div>
        {!!users.length &&
          users.map((user) => (
            <li
              className="user__item"
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            >
              <div>
                <span>{user.id}. </span>
                <span> {user.username}</span>
              </div>
              <div>{user.email}</div>
              <div className="buttons">
                <Link to={`/user-detail/${user.id}`}>     
                  <button
                    // onClick={viewUser}
                    className="view__user_btn"
                    title="View"
                  >
                    <VisibilityOutlinedIcon fontSize="small" />
                  </button>
                </Link>
                <button
                  onClick={() => showEditModal(user.id)}
                  className="edit__user_btn"
                  title="Edit"
                >
                  <EditOutlinedIcon fontSize="small" />
                </button>
                <button
                  onClick={() => showDeleteModal(user.id)}
                  className="delete__user_btn"
                  title="Delete"
                >
                  <DeleteForeverOutlinedIcon fontSize="small" />
                </button>
              </div>
            </li>
          ))}
           
      </ul>
      {modalIsOpen2 && (
        <Modal handleModal={() => setModalIsOpen2(false)}>
          <div className="modal-edit__content">
            <EditUserModal id={userId} editUser={confirmUser} />
          </div>
        </Modal>
      )}

      {modalIsDetele && (
        <Modal handleModal={() => setModalIsDelete(false)}>
          <div className="modal-delete__content">
            <h3>Are you sure?</h3>
            <button
              className="cancel__btn"
              onClick={() => setModalIsOpen(false)}
            >
              No
            </button>
            <button className="confirm__btn" onClick={cofirmDeleteUser}>
              Yes
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default User;
