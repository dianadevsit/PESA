import React from "react";
import "./style.css";
import TextField from '@material-ui/core/TextField';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search mt-5 mr-5">
     <TextField id="standard-basic" label="Standard" />
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

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success ml-5 mt-5">
          Search
        </button>
      </div>
      </div> 
    </form>
  );
}

export default SearchForm;
