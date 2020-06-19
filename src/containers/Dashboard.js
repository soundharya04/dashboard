import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getCandidates } from "../store/Actions/CandidateAction";
import Mainarea from "../components/Mainarea";
import { Spinner } from "../components/uiElements/uiElements";

const Dashboard = (props) => {
  useEffect(() => {
    props.getCandidates();
  }, []);

  const toggleSidebarClass = props.toggle
    ? "col-md-2 col-sm-0 col-xs-2 anim"
    : "col-md-1 col-sm-0 col-xs-1 anim";
  const toggleMainClass = props.toggle
    ? "col-md-10 col-sm-12 col-xs-12 anim"
    : "col-md-11 col-sm-12 col-xs-12 anim";

  const mainbanner = props.spinner ? (
    <div className={toggleMainClass}>
      <Mainarea />
    </div>
  ) : (
    <Spinner />
  );
  return (
    <div className="bodyarea">
      <Navbar />
      <div className="row">
        <div
          className={toggleSidebarClass}
          style={{
            background: "#212529",
          }}
        >
          <Sidebar></Sidebar>
        </div>
        {mainbanner}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    spinner: state,
    candidates: state ? state.candidates : null,
    toggle: state ? state.toggleSidebar : null,
  };
};

export default connect(mapStateToProps, { getCandidates })(Dashboard);
