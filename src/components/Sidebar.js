import React from "react";
import { toggleSidebar } from "../store/Actions/CandidateAction";
import { connect } from "react-redux";

const onToggle = (
  <div>
    <i className="ion-home icon-big"></i>
  </div>
);

const onNotToggle = (
  <div>
    <i className="ion-home icon-big"></i>
    <span className="pl-2">Dashboard</span>
  </div>
);
const Sidebar = (props) => {
  return (
    <div id="layoutSidenav_nav" className="sidebar text-white">
      <div className="container d-flex flex-column align-items-center justify-content-center mt-3">
        <div>{!props.toggle ? onToggle : onNotToggle}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { toggle: state ? state.toggleSidebar : null };
};
export default connect(mapStateToProps, { toggleSidebar })(Sidebar);
