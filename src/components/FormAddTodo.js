import React, { useState, useEffect } from "react";

const FormAddTodo = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([todo, priority]);
  };

  //   useEffect(() => {
  //     console.log("todo : ", todo, " priority : ", priority);
  //   }, [todo, priority]);

  const setTodoNameUpperCase = (e) => {
    setTodo(e.target.value.toUpperCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Todo"
          value={todo}
          onChange={setTodoNameUpperCase}
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
