import axios from "axios";

const loadTodo = () => async (dispatch) => {
  try {
    const todos = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos",
    });
    dispatch({
      type: "LOAD_TODO",
      payload: {
        newTodos: todos.data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const addTodo = (id, title, priority, complete) => (dispatch) => {
  try {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id,
        title,
        priority,
        complete,
      },
    });
  } catch (error) {
    console.error();
  }
};

export default {
  loadTodo,
  addTodo,
};
