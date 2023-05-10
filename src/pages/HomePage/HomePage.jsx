import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import TodoListPage from "../../components/TodoListPage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {getTodoList} from '../../store/todosReducer';
import LoginPage from "../LoginPage/LoginPage";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const {todos, isLoading} = useSelector((state) => state.todos);

    useEffect(() => {
    dispatch(getTodoList())
  }, []);

  return (
      isLoading ? <span>"Loading"</span> :
      <>
      {/* <h2 className="page__title">Home page</h2> */}
      { todos.length > 0 ? (<TodoListPage todos={todos} />) : ( <h2 style={{color:"rgb(255, 0, 0)", textAlign:"center", fontWeight:"500"}}>No todos!</h2>)
      }
      </>  
  );
};

export default HomePage;
