import React, { Component } from "react";

import { Container, Row, Col } from "../components/Grid";

import Logo from "../components/Logo";

import SearchForm from "../components/SearchForm"

import SearchResult from "../components/SearchResult"

import FormFill from "../components/FormFill"

import logoImage from "../images.json";

import API from "../utils/API"


class SearchPage extends Component {
    state = {

        search: "",
        company: "",
        location: "",
        position: "",
        description: "",
        date: "",
        document: "",
        results: []
    }

    componentDidMount() {

    //   API.search("web developer, boston")
    //   .then(res => this.setState({ results: res.data.message }))
    //   .catch(err => console.log(err));

    }

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
      
    };

    handleFormSubmit = event => {
        event.preventDefault(); 
  

        console.log(this);

        API.saveJob({
            company_name: this.state.company,
            location: this.state.location,
            position: this.state.position,
            description: this.state.description,
            application_date: this.state.date,
            document: this.state.document

        })
      .then(res => this.getJobs())
      .catch(err => console.log(err));

    }

   

    render () {
        return (

        
            <div>
            <div className="d-flex justify-content-between border-bottom ml-2 mr-2">
            <Row>
                <Col size="md-2">
                <Logo image={logoImage[0].image} name={logoImage[0].name} />
                </Col>
            </Row>
            <Row className="ml-5">
                <Col size="md-12">
                <SearchForm 
               search={this.state.search}
                // location={this.state.location}
                onChange={this.handleInputChange}
               onClick={this.handleFormSubmit}
                />
                
              </Col>
              
                
            </Row>
            </div>
            
            <div className="ml-5">
            <FormFill 
            company={this.state.company}
            location={this.state.location}
            position={this.state.position}
            description={this.state.description}
            date={this.state.date}
            document={this.state.document}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
           
            </div>

            </div>
        
         
        )
    }


}

export default SearchPage;