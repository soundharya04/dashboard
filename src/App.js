import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import "./App.css";
import "./ionicons.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/nav" component={Dashboard}></Route>
          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
