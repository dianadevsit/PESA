// import react and required components

import React from "react";

import { Row, Col } from "../components/Grid";

import IndexNavBar from "../components/IndexNavBar";



// render function for the index page

function IndexPage() {
    
  return (
      
    <div id="index-page">
      <IndexNavBar />          
      <Row>
        <Col size="md-6"></Col>
        <Col size="md-6">
          
          <p className="mt-5 pt-5 mr-2 font-weight-bold"><strong>
          PESA - Personal Employment Search Assistant is an application that keeps you and your job search in sync.
          This application is the best for tracking your job applications, application documents, appointments, contacts, interviews, locations, etc. 
          </strong></p>
                   
        </Col>
      </Row>
    </div>
    
  );
  
}
  
  
export default IndexPage;