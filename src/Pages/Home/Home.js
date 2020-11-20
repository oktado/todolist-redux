import React from "react";
import FormAddTodo from "../../components/FormAddTodo";
import TodoList from "../../components/TodoList";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <hr />
      <h3>Todo List App</h3>
      <FormAddTodo />
      <hr />
      <TodoList />
    </>
  );
};

export default Home;
