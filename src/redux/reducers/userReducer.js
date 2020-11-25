const initalState = {
  isLogin: false,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CHANGE_USER_LOGIN_STATUS":
      return {
        ...state,
        isLogin: action.payload.loginStatus,
      };
    default:
      return state;
  }
};

export default userReducer;
