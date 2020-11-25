import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import PrivateRoute from "./routes/privateRoute";

function App() {
  const dispatch = useDispatch();

  //check localstorage
  useEffect(() => {
    const userStatus = localStorage.getItem("userStatus");

    //ngecek validitas localstorage, disimpan dalam bentuk token

    dispatch({
      type: "CHANGE_USER_LOGIN_STATUS",
      payload: {
        loginStatus: userStatus === "true" ? true : false,
      },
    });

  }, []);

  return (
    <div className="App" style={{ paddingLeft: "30px" }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
