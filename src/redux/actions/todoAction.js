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

const addTodo = (id, title, complete) => async (dispatch) => {
  try {
    const todos = await axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/todos",
      data: {
        id,
        title,
        complete,
      },
    });

    if (!todos.data.id) {
      throw new Error("failed create new todo");
    }

    loadTodo();

    // dispatch({
    //   type: "ADD_TODO",
    //   payload: {
    //     newTodo: {
    //       title: title,
    //       id: id,
    //       complete: complete,
    //     },
    //   },
    // });
  } catch (error) {
    console.error();
  }
};

export default {
  loadTodo,
  addTodo,
};
