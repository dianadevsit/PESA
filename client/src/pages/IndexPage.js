import React from "react";

import { Container, Row, Col } from "../components/Grid";

import Logo from "../components/Logo";

import GoogleButton from "../components/GoogleButton";

import logoImage from "../images.json";
import SearchPage from './SearchPage';


function IndexPage() {
    return (
        <Container>
          <Logo image={logoImage[0].image} name={logoImage[0].name} />
          <GoogleButton />
          <Row>
            <Col size="md-12">
               <p className="mt-5">
               PESA is a Personal Employment Search Assistant that will assist you in tracking your job search, resume and cover letter 
               submissions, name and contact information, interviews and appointments. You can enter and retrieve important notes and comments, 
               rate employers, and enter your assessment of the position. Employment search APIs are integrated to search directly within the 
               PESA application. Future versions of PESA will include the following: integration with clocks, alarms and calendars, 
               transportation planning, ride sharing, commuter resources, bus and train schedules, bicycle routes, parking and EV charging 
               locators, navigation, work assignment reminder, work time-clock, work site locations, work related expenses, reimbursement, 
               benefits and retirement investment tracking.
                </p>
                <p className="mt-5">
                PESA will be cloud based, hosted on the Internet and locally resided on your computer, tablet and phone. PESA will be secure, 
                compliant with ADA Title 3, Web Content Accessibility Guidelines 2.1, Section 508, the European Standard for ICT Accessibility 
                EN301549, and will be continuously tested, black box scanned and patched for security after deployment.
                </p>
                      
            </Col>
          </Row>
        </Container>
    );
  
}
  
  export default IndexPage;