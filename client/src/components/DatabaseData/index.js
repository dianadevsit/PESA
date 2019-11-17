import React from "react";

import { Link } from "react-router-dom"

function DatabaseData(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li key={result._id} className="list-group-item card-body font-weight-bold mt-3">
          <p>ID: {result._id} </p>
          <p>COMPANY: {result.company_name}</p>
          <p>LOCATION: {result.location} </p>
          <p>POSITION: {result.position} </p>
          <p>JOB DESCRIPTION: {result.description} </p>
          <p>APPLICATION DATE: {result.application_date} </p>
          <p>DOCUMENT: {result.documents} </p>

          {/* edit button */}
          <Link to={"/api/pesa/"+ result.id} className={window.location.pathname === "api/pesa"}>
            <button className="card-button btn btn-success">
              Edit
            </button>
            </Link>
             
            {/* delete button */}
            <button className="card-button btn btn-success ml-3" onClick={()=> props.deleteJob(result.id)}>
              Delete
            </button>
        </li>
      ))}
    </ul>
  );
}

export default DatabaseData;