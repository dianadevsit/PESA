// import react and style.css

import React from "react";

import "./style.css";


// search form component

function SearchForm(props) {
  return (
    <form className="search mr-5">
      <div className="mt-5 mr-5">
      <div className="form-group d-flex justify-content-between mt-5 mr-5">
        <label htmlFor="job-title" className="mt-5 text-center font-weight-bold">Job Title</label>
        <input
          search={props.search}
          onChange={props.handleInputChange}
          name="job-title"
          type="text"
          className="form-control w-25 mt-5"
          placeholder="job title"
        />
        <label htmlFor="location" className="ml-5 mt-5 text-center font-weight-bold">Location</label>
        <input
          location={props.location}
          onChange={props.handleInputChange}
          name="location"
          type="text"
          className="form-control w-25 mt-5"
          placeholder="location"
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary ml-5 mt-5">
          Search
        </button>
      </div>
      </div>
    </form>
  );
}


export default SearchForm;
