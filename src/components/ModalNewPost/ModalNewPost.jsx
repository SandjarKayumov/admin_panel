import React, { useEffect, useState } from "react";
import "./ModalNewPost.scss";
import axios from "axios";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Button } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const NewPostModal = ({ createPost }) => {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  // if (!post) return null;


  const addNewPost = (e) => {
    e.prevent.default()
    const post = {
      ...post,
      id: Date.now(),
      title: setTitle,
      body: setBody,
    };
   createPost(post);
  };

  return (
    <div>
      <div className="create-post-modal">
        <h2 className="">
          <PostAddIcon />
          &nbsp;new post
        </h2>
        <form onSubmit={addNewPost} className="create__post_body">
          <input
            type="text"
            autoFocus={true}
            placeholder="Enter Title"
            className="input__post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br />
          <textarea
            value={body}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Post Body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <Button
          // type="submit"
            variant="contained"
            className="new__post_btn"
            style={{ margin: "25px auto" }}
          >
            <SaveAsIcon fontSize="small" />
            &nbsp;save
          </Button>
          <Button
            variant="contained"
            className="new__post_btn"
             onClick={()=> addNewPost(post)}
            style={{ margin: "25px auto" }}
          >
            <SaveAsIcon fontSize="small" />
            &nbsp;cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
