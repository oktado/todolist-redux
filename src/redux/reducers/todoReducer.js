const initialState = {
  todos: [
    {
      id: 1,
      title: "React-Redux",
      priority: "Medium",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      return {
        todos: action.payload.newTodos,
      };
    case "ADD_TODO":
      let arrTemp = { ...state };
      arrTemp.todos.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
