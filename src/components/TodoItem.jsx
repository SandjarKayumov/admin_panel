import React from "react";
import "./TodoItem.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction } from "../store/postsReducer";
import {deleteTodo} from '../store/todosReducer'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  // const deletePost = (post) => {
  //   dispatch(deletePostAction(post.id));
  //   console.log(post.id);
  // };
  return (
    <div className="todo-item">
      <div>
        <input type="checkbox" />
        {todo.id}.
        {todo.title}
      </div>
      <DeleteForeverIcon className="remove-todo" onClick={() => dispatch(deleteTodo(todo.id))}
      //  onClick={()=>deletePost(post)}
        />
    </div>
  );
};

export default TodoItem;
