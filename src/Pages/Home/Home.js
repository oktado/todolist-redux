import React from "react";
import { useDispatch } from "react-redux";

import FormAddTodo from "../../components/FormAddTodo";
import TodoList from "../../components/TodoList";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userStatus");
    dispatch({
      type: "CHANGE_USER_LOGIN_STATUS",
      payload: {
        loginStatus: false,
      },
    });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <h3>Todo List App</h3>
      <FormAddTodo />
      <hr />
      <TodoList />
    </>
  );
};

export default Home;
