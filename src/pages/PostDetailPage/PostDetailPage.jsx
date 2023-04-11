import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PostDetailPage.scss";
import { Button } from "@mui/material";


const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    if (!id) return;
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data);
    setPost(res);
  };
  if (!post) return;

  return (
    <div>
      <h3 className="page__title">Post Detail</h3>
      <div className="post__detail">
        <div className="post__detail_items">
          <div className="post__detail_item">
            <strong>User ID:</strong>
            <strong>Post Body:</strong>
          </div>
          <div className="post__detail_item">
            <div>{post.userId}</div>
            <p className="first__letter">{post.body}</p>
          </div>
        </div>
      </div>
      <Link to="/post-list"  style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Button variant="contained">back to all posts</Button></Link>
    </div>
  );
};

export default PostDetailPage;
