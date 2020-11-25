import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userStatus = useSelector((state) => state.user.isLogin);

  const handleLogin = () => {
    localStorage.setItem("userStatus", true);
    dispatch({
      type: "CHANGE_USER_LOGIN_STATUS",
      payload: {
        loginStatus: true,
      },
    });
  };

  //check login status
  useEffect(() => {
    if (userStatus) {
      history.push("/");
    }
  }, [userStatus]);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
