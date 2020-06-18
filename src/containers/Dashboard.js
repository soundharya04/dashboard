import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getCandidates } from "../store/Actions/CandidateAction";

const Dashboard = (props) => {
  useEffect(() => {
    props.getCandidates();
  }, []);

  const toggleSidebarClass = !props.toggle
    ? "col-md-2 col-sm-0 col-xs-2 anim"
    : "col-md-1 col-sm-0 col-xs-1 anim";
  const toggleMainClass = !props.toggle
    ? "col-md-10 col-sm-12 col-xs-12 anim"
    : "col-md-11 col-sm-12 col-xs-12 anim";
  return (
    <div>
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
        <div className={toggleMainClass} style={{}}>
          <div>
            Main content
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at
              illo accusamus. Fugit voluptas atque animi, quod sit autem dolor
              cumque optio, dolorem quibusdam deserunt laudantium impedit
              doloremque nulla maxime?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    candidates: state ? state.candidates : null,
    toggle: state ? state.toggleSidebar : null,
  };
};

export default connect(mapStateToProps, { getCandidates })(Dashboard);
