import React from "react";
import { toggleSidebar } from "../store/Actions/CandidateAction";
import { connect } from "react-redux";

const Sidebar = (props) => {
  return (
    <div id="layoutSidenav_nav" className="sidebar text-white">
      <div>{props.toggle ? "D" : "D Dashboard"}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { toggle: state ? state.toggleSidebar : null };
};
export default connect(mapStateToProps, { toggleSidebar })(Sidebar);
