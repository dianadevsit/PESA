import React from "react"

function EditpageData(props) {

    return (
      <form className="form-group"  onSubmit={props.handleFormSubmit}>

          
          
        <label htmlFor="company_name" className="mt-5 text-center font-weight-bold d-inline ml-n2">COMPANY</label>
            <input
          value={props.company_name}
          onChange={props.handleInputChange}
          name="company_name"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
        />
        <br />
        <label htmlFor="location" className="mt-5 text-center font-weight-bold d-inline">LOCATION</label>
            <input
          value={props.location}
          onChange={props.handleInputChange}
          name="location"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
        />
        <br />
        <label htmlFor="position" className="mt-5 text-center font-weight-bold d-inline">POSITION</label>
            <input
          value={props.position}
          onChange={props.handleInputChange}
          name="position"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
        />
        <br />
        <label htmlFor="description" className="mt-5 text-center font-weight-bold d-inline">DESCRIPTION</label>
            <input
          value={props.description}
          onChange={props.handleInputChange}
          name="description"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-4"
        />
        <br />
        <label htmlFor="application_date" className="mt-5 text-center font-weight-bold d-inline ml-n3">APPLICATION DATE</label>
            <input type="date"
          value={props.application_date}
          onChange={props.handleInputChange}
          name="application_date"
          className="form-control w-75 mt-5 d-inline ml-3"
        />
        <br />
        <label htmlFor="documents" className="mt-5 text-center font-weight-bold d-inline">DOCUMENT</label>
            <input
          value={props.documents}
          onChange={props.handleInputChange}
          name="documents"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
        />

         <span className="mt-3 ml-4 text-center d-block">{props.message}</span>
              {/* save button */}
              <div className="d-flex justify-content-center align-items-center mt-3">

            <button className="card-button btn btn-success ml-3 d-block" role="submit">
                Save
            </button>
            <br />
            

            </div>

           
          
      </form>
    );
  }

export default EditpageData;