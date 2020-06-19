import React from "react";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";

import paginationFactory from "react-bootstrap-table2-paginator";

const Detail = (props) => {
  const columns = [
    {
      dataField: "candidateId",
      text: "candidateId",
      headerStyle: (colum, colIndex) => {
        return { width: "20%", textAlign: "left" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      headerStyle: (colum, colIndex) => {
        return { width: "10%", textAlign: "left" };
      },
    },
    {
      dataField: "domain",
      text: "Domain",
      headerStyle: (colum, colIndex) => {
        return { width: "15%", textAlign: "left" };
      },
    },
    {
      dataField: "yearOfExperience",
      text: "YearOfExp",
      headerStyle: (colum, colIndex) => {
        return { width: "10%", textAlign: "left" };
      },
    },
    {
      dataField: "recruiterName",
      text: "RecruiterName",
      headerStyle: (colum, colIndex) => {
        return { width: "15%", textAlign: "left" };
      },
    },
    {
      dataField: "interviewType",
      text: "InterviewType",
      headerStyle: (colum, colIndex) => {
        return { width: "15%", textAlign: "left" };
      },
    },
  ];

  let allQuotes = Number(props.candidates.data.length);

  const options = {
    paginationSize: 5,
    pageStartIndex: 0,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",

    sizePerPageList: [
      {
        text: "show 5",
        value: 5,
      },
      {
        text: "show 10",
        value: 10,
      },
      {
        text: "Show all",
        value: allQuotes,
      },
    ],
  };

  return (
    <div className="container mx-3 tablearea">
      <div className="detailhead container p-2 col-md-8">Scheduled List</div>
      <BootstrapTable
        striped
        hover
        keyField="name"
        data={props.candidates.data}
        columns={columns}
        pagination={paginationFactory(options)}
      ></BootstrapTable>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    candidates: state ? state.candidates : null,
  };
};

export default connect(mapStateToProps)(Detail);
