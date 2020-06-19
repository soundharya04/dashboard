import React from "react";
import { CandidCard } from "../components/uiElements/uiElements";
import { connect } from "react-redux";

const Summary = (props) => {
  const CandidSummary = props.candidates.data.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});
  //console.log(CandidSummary);
  let CanDomain = {};
  const canSum = props.candidates.data.forEach((v) => {
    CanDomain[v.domain] = ++CanDomain[v.domain] || 1;
    return CanDomain;
  });
  const CandidateSummary = Object.keys(CanDomain).map((candidate) => {
    return <CandidCard title={candidate}>{CanDomain[candidate]}</CandidCard>;
  });

  return (
    <div className="disp-cards">
      <div className="row">
        <div className="container-fluid mx-3 text-dark d-flex">
          <CandidCard title="Total Candidates">
            {props.candidates.data.length}
          </CandidCard>
          {CandidateSummary}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    candidates: state ? state.candidates : null,
  };
};

export default connect(mapStateToProps)(Summary);
