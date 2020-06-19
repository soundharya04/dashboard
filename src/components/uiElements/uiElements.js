import React from "react";
import "../../Spinner.css";

export const FormContainer = (props) => (
  <div
    className="form-container text-white"
    style={{
      ...props.formStyle,
    }}
  >
    {props.children}
  </div>
);

export const CandidCard = (props) => {
  return (
    <div className="candidate-cards">
      <div className=" text-center">
        <i
          className="ion-ios-people"
          style={{
            fontSize: "xx-large",
            fontWeight: "700",
          }}
        ></i>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title text-uppercase font-roboto">{props.title}</h5>
        <h5 className="card-title ">{props.children}</h5>
        <span className="text-muted">candidates</span>
      </div>
    </div>
  );
};

export const Spinner = () => <div className="Loader">Loading...</div>;
