import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import todoAction from "../redux/actions/todoAction";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(todoAction.loadTodo());
  }, []);

  return (
    <>
      <ul>
        {todos &&
          todos.map((todo) => {
            return <li>{todo.title}</li>;
          })}
      </ul>
    </>
  );
};

export default TodoList;
