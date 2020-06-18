import React from "react";
import { FormContainer } from "./uiElements/uiElements";
import Home from "./Home";
const Logout = () => {
  return (
    <Home>
      <FormContainer
        formStyle={{
          marginTop: "30vh",
        }}
      >
        <h5>
          You are successfully logged out.
          <br /> Please{" "}
          <a className="link-dec" href="/">
            Login{" "}
          </a>{" "}
          to continue.
        </h5>
      </FormContainer>
    </Home>
  );
};

export default Logout;
