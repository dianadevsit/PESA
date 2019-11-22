import React from "react";

import { Link } from "react-router-dom";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function FormFill(props) {
  return (
    <form>
      <div>
      <div className="form-group">
        <label htmlFor="job-title" className="mt-5 text-center font-weight-bold d-inline ml-5">Company Name</label>
        <input
          value={props.company}
          onChange={props.handleInputChange}
          name="company"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
          placeholder="company"
        />
        <label htmlFor="location" className="ml-5 mt-5 pl-5 text-center font-weight-bold">Location</label>
        <input
          value={props.location}
          onChange={props.handleInputChange}
          name="location"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
          placeholder="location"
        />        
        <label htmlFor="job-title" className="mt-5 ml-5 pl-5 text-center font-weight-bold ">Position</label>
        <input
          value={props.position}
          onChange={props.handleInputChange}
          name="position"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
          placeholder="position"
        />
        <label htmlFor="job-title" className="mt-5 ml-5 pl-4 text-center font-weight-bold">Description</label>
        <input
          value={props.description}
          onChange={props.handleInputChange}
          name="description"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
          placeholder="description"
        />
        <label htmlFor="date" className="mt-5 ml-4 text-center font-weight-bold">Application Date</label>
        <input
          value={props.date}
          onChange={props.handleInputChange}
          name="date"
          type="date"
          className="form-control w-75 mt-5 d-inline ml-5"
          placeholder="MM/DD/YYYY"
        />
        <label htmlFor="documents" className="mt-5 ml-2 text-center font-weight-bold">Document Submitted</label>
        <input
          value={props.documents}
          onChange={props.handleInputChange}
          name="documents"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-4"
          placeholder="documents"
        />
        <br />
        <div className="d-flex justify-content-center align-items-center">
        <button onClick={props.handleFormSubmit} className="btn btn-success mt-5">
          Submit
        </button>
        
        <Link to="view/pesa" className={window.location.pathname === "view/pesa"}>
            <button className="btn btn-success mt-5 ml-5">
                View Jobs
            </button>
        </Link>
        
        </div>
      </div>
      </div>
    </form>
  );
}

export default FormFill;
