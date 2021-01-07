import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DashBoard from "./components/Dashboard";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "././/PrivateRoute";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <PrivateRoute path="/" exact component={DashBoard} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <PrivateRoute path="/update-profile" exact component={UpdateProfile} />
    </BrowserRouter>
  );
};

export default App;
