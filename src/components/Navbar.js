import React from "react";
import { toggleSidebar } from "../store/Actions/CandidateAction";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <nav className=" .sb-topnav navbar navbar-expand navbar-dark bg-dark sticky-top">
      <a className="navbar-brand" href="index.html">
        Dashboard
      </a>
      <a
        className="toggle nav-link text-white "
        id="sidebarToggle"
        href="#"
        onClick={() => {
          props.toggleSidebar();
        }}
      >
        <i className="ion-navicon-round"></i>
      </a>

      <ul className="navbar-nav ml-auto ">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="userDropdown"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="ion-person"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <a className="dropdown-item" href="#">
              Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/logout">
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { toggle: state ? state.toggleSidebar : null };
};
export default connect(mapStateToProps, { toggleSidebar })(Navbar);
