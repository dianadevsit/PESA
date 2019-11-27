import React from "react";

import { Container, Row, Col } from "../components/Grid";

import Logo from "../components/Logo";

import GoogleButton from "../components/GoogleButton";

import logoImage from "../images.json";
import SearchPage from './SearchPage';

import CareerServiceImage1 from "../images.json";


function IndexPage() {

  console.log('CareerServiceImage1:', CareerServiceImage1);

  return (

    <div id="style">
      <div id="logo">
        <div id="picture">
          <Logo image={logoImage[0].image} name={logoImage[0].name} />
          <div id="indexdetail">
            <h2>Personal Employment Search Assistant</h2>
            
          </div>
          <div>
            <GoogleButton />
          </div>
        </div>
        <Row className="row">
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
        <div id="image1">

          {

            CareerServiceImage1.filter((item) => {
              return item.name.includes('Service')
            }).map((el) => {
              return <img
                key={el.id}
                className={'career-img'}
                name={el.name}
                src={el.image}
              />
            })

          }


        </div>
      </div>
    </div>




  );

}

export default IndexPage;