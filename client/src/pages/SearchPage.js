import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "../components/Grid";

import Logo from "../components/Logo";

import SearchForm from "../components/SearchForm"

import SearchResult from "../components/SearchResult"

import logoImage from "../images.json";

import API from "../utils/API"

class SearchPage extends React.Component {
    state = {

        search: "",
        location: "",
        results: []
    }

    componentDidMount() {

    //   API.search("web developer, boston")
    //   .then(res => this.setState({ results: res.data.message }))
    //   .catch(err => console.log(err));

    }

    handleInputChange = event => {

        const { search, location } = event.target;

        this.setState({ 
            search: search,
            location: location
        });
      
    };

    handleFormSubmit(event) {
        event.preventDefault();    
        API.search(this.state.search, this.state.location)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));

    }

    saveJob({data}) {

        API.saveJob({data})
        
    }

    render () {
        return (

            // <Container fluid>
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
                location={this.state.location}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
              </Col>
                
            </Row>
            </div>
            <SearchResult results={this.state.results} saveJob={this.saveJob}/>
            <button className="">
                <Link to="api/pesa" className={window.location.pathname === "api/pesa"}>
                    View Jobs
                </Link>
            </button>
            </div>
            // </Container>
        )
    }


}

export default SearchPage;