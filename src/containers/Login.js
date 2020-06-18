import React from "react";
import { FormContainer } from "../components/uiElements/uiElements";
import Home from "../components/Home";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  return (
    <Home>
      <FormContainer formStyle={{ marginTop: "20vh" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(username, password);
            history.push("/nav");
          }}
        >
          <h5 className="h3 text-center">LOGIN</h5>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control shadow-none "
              id="username"
              placeholder="Enter username"
              required
              autoComplete="off"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control shadow-none"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className=" d-flex ">
            <label>
              <input type="checkbox" className="mr-2 bg-success"></input>
              Remember Me
            </label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </FormContainer>
    </Home>
  );
};

export default Login;
