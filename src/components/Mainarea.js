import React from "react";
import Summary from "../containers/Summary";
import Detail from "../containers/Detail";

const Mainarea = () => (
  <div className="mainarea f-flex flex-column">
    <Summary />
    <Detail />
  </div>
);

export default Mainarea;
