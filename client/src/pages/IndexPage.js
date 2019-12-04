// import react and required components


import React from "react";

import { Row, Col } from "../components/Grid";

import IndexNavBar from "../components/IndexNavBar";


import React from "react";

import { Row, Col } from "../components/Grid";

import IndexNavBar from "../components/IndexNavBar";

import SearchPage from './SearchPage';



// render function for the index page

function IndexPage() {
    
  return (
      
    <div id="index-page">
      <IndexNavBar />          
      <Row>
        <Col size="md-6"></Col>
        <Col size="md-6">
          <p className="mt-5 font-weight-bold"><strong>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
            mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
            porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
            semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
            rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </strong></p>             
        </Col>
      </Row>
    </div>
    
  );
  
}
  
  
export default IndexPage;