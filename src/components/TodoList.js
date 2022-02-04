import React, { useEffect } from "react";
import {} from "redux";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import todoAction from "../redux/actions/todoAction";

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todos);
  const { todos } = list;
  console.log(todos);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
