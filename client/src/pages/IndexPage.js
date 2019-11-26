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
                  Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
                  mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
                  porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
                  semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
                  rhoncus mollis diam, sit amet facilisis lectus blandit at.
                </p>
                <p className="mt-5">
                  Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
                  mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
                  porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
                  semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
                  rhoncus mollis diam, sit amet facilisis lectus blandit at.
                </p>
                      
            </Col>
          </Row>
        </Container>
    );
  
}
  
  export default IndexPage;