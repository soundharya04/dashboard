import React from "react";
import { Route } from "react-router-dom";
import Login from "../containers/Login";
import Logout from "./Logout";

const Home = (props) => {
  return (
    <section className="header-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12"></div>
          <div className="col-md-4 col-sm-4 col-xs-12">{props.children}</div>
          <div className="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
