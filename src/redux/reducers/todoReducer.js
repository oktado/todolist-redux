const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      return {
        todos: action.payload.newTodos,
      };
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.paylod.newTodo],
      };
    default:
      return state;
  }
};

export default todoReducer;
