import React, { useState } from "react";
import "./ModalEditPost.scss";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const EditPostModal = ({ id }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    getPost();
  }, [id]);

  const getPost = async () => {
    const res = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data);
    setPost(res);
  };
  // if (!post) return;

  return (
    <div className="edit__post">
      <h2>
        <EditIcon style={{ marginRight: "5px" }} />
        Edit Post
      </h2>
      <label>
        <input
          type="text"
          value={post.title || ''}
          onChange={(e) =>
            setPost((prev) => ({ ...prev, title: e.target.value.toUpperCase()}))
          }
        />
      </label>
      <textarea
        value={post.body}
        onChange={(e) => setPost((prev) => ({ ...prev, body: e.target.value.toUpperCase()}))}
        name=""
        id=""
        cols="30"
        rows="10"
        style={{ marginTop: "20px" }}
      ></textarea>

      <Button
        variant="contained"
        className="save__post_btn"
        // onKeyDown={handleKeyDown}
        style={{margin:"25px auto"}}
      >
        <SaveAsIcon fontSize="small" />
        &nbsp;save
      </Button>
    </div>
  );
};

export default EditPostModal;

//test 
