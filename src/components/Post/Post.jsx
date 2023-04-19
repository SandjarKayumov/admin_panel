import React, { useState, useEffect } from "react";
import "../../pages/PostListPage/PostListPage.scss";
import { Link, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditPostModal from "../ModalEditPost/ModalEditPost";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewPostAction,
  editPostAction,
  deletePostAction,
} from "../../store/postsReducer";

const Post = ({ editPost }) => {
  const [showModal, setShowModal] = useState(false);
  // const [showEditModal, setShowEditModal] = useState(false);
  const [post, setPost] = useState("");
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(null);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const showEditModal = (id) => {
    setPostId(id);
    setModalIsOpen2(true);
  };

  // const deletePost = (post) => {
  //   dispatch(deletePostAction(post));
  //   console.log(post.id);
  // };

  return (
    <>
      <ul>
        {posts &&
          posts.map((post) => (
            <li
              className="post__item"
              key={post.id}
              id={post.id}
              // title={post.title}
              body={post.body}
            >
              <div>
                <span>{post.id}. </span>
                <span>{post.title}</span>
              </div>
              <div className="buttons">
                <Link to={`/post-detail/${post.id}`}>
                  <button className="view__post_btn">
                    <VisibilityOutlinedIcon fontSize="small" />
                  </button>
                </Link>
                <button
                  onClick={() => showEditModal(post.id)}
                  className="edit__post_btn"
                >
                  <EditOutlinedIcon fontSize="small" />
                </button>
                {/* <Link to={`/post-delete/${post.id}`}> */}
                <button
                  onClick={() =>  dispatch(deletePostAction(post.id))}
                  className="delete__post_btn"
                >
                  <DeleteForeverOutlinedIcon fontSize="small" />
                </button>
                {/* </Link> */}
              </div>
            </li>
          ))}
      </ul>
      {showModal && (
        <Modal
          handleModal={() => setShowModal(false)}
          style={{ width: "400px" }}
        >
          <h2>Delete Post</h2>
        </Modal>
      )}
      {modalIsOpen2 && (
        <Modal handleModal={() => setModalIsOpen2(false)}>
          <div className="modal-edit__content">
            <EditPostModal id={postId} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Post;
