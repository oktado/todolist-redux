import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import todoAction from "../redux/actions/todoAction";

const FormAddTodo = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // todoAction.addTodo(uuidv4(), todo, priority, false);
    dispatch({
      type: "ADD_TODO",
      payload: { id: uuidv4(), title: todo, priority, completed: false },
    });
    setTodo("");
    setPriority("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="New Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <input type="submit" value="add todo" />
      </form>
    </div>
  );
};

export default FormAddTodo;
