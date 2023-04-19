  import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import "./PostListPage.scss";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import NewPostModal from "../../components/ModalNewPost/ModalNewPost";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../store/postsReducer";
// import { addNewPostAction, editPostAction, deletePostAction } from "../../store/postsReducer";

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const postsURL = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  const [isLoading, setIsLoading] = useState(false);
  const [isPagination, setPagination] = useState(false);
  const [modalCreatePost, setModalCreatePost] = useState(false);

  // const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    setIsLoading(true);
    axios.get(postsURL).then((response) => {
      setPosts(response.data);
      setIsLoading(false);
      setPagination(true);
    });
  }, []);

  if (!posts) return null;

  const newPost = (post) => {
    setPosts((prev) => [{ ...post, id: Math.random() + 10 }, ...prev]);
    setModalCreatePost(false);
  };

  const deletePost = (post) => {
    // dispatch(DeletePostAction(post.id))
    // setPosts((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div>
      <div className="post-page__top">
        <h2 className="page__title">All Posts</h2>
        <Button
          variant="contained"
          className="create__post_btn"
          onClick={() => setModalCreatePost(true)}
        >
          <PostAddIcon fontSize="medium" />
          &nbsp;new post
        </Button>
      </div> 
      <div className="posts__page">
        {posts.length >= 1 ? (
          <Post posts={posts} newPost={newPost} />
        ) : (
          <h2
            style={{
              color: "rgb(255, 0, 0)",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            No Posts!
          </h2>
        )}
        {/* {posts.length >= 1 ? (
          <Post posts={posts} deletePost={deletePost} />
        ) : (
          <h2
            style={{
              color: "rgb(255, 0, 0)",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            No Posts!
          </h2>
        )} */}
        {isLoading && <Loader />}
        {modalCreatePost && (
          <Modal handleModal={() => setModalCreatePost(false)}>
            <NewPostModal newPost={newPost} />
          </Modal>
        )}
      </div>
        {isPagination && (
          <Pagination
            className="pagination__center"
            color="primary"
            count="10"
          />
        )}
    </div>
  );
};

export default PostListPage;
