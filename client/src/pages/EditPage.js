import React, { Component } from "react";

import { Row, Col } from "../components/Grid";

import Logo from "../components/Logo";

import EditpageData from "../components/EditpageData";

import logoImage from "../images.json";

import API from "../utils/API"


class EditPage extends Component {

    state = {
        company_name: "",
        location: "",
        position: "",
        description: "",
        application_date: "",
        documents: "",
        message: ""
    }


    componentDidMount = () => {

        API.getJob(this.props.match.params.id)
      
        .then(res => {
          
            console.log(res.data)

          
            let data = res.data
          
          
            this.setState({ 
            //   id: data._id,
              company_name: data.company_name,
              location: data.location,
              position: data.position,
              description: data.description,
              application_date: data.application_date,
              documents: data.documents
         
            })

          
        
        })      
        .catch(err => console.log(err));

    }

    
    handleInputChange = event => {

        console.log(event.target)

        const { name, value } = event.target;

        this.setState({
            [name] : value
        })

        
    };



    handleFormSubmit = event => {

        event.preventDefault();

        API.editJob(this.props.match.params.id, this.state)
        .then(editedJob => {
          console.log(editedJob)
          this.setState({
            company_name: "",
            location: "",
            position: "",
            description: "",
            application_date: "",
            documents: "",
            message: "JOB DETAILS SAVED"
          })
        })      
        .catch(err => console.log(err));

    }

   

    render () {
        return (

        
            <div>
            <div className="border-bottom ml-2 mr-2 pb-3 mb-4">
            <Row>
                <Col size="md-2">
                <Logo image={logoImage[0].image} name={logoImage[0].name} />
                </Col>
            </Row>
            
            </div>
            
            <div className="ml-5">
                <EditpageData 
                message={this.state.message}
                key={this.state.id}
                company_name={this.state.company_name}
                location={this.state.location}
                position={this.state.position}
                description={this.state.description}
                application_date={this.state.application_date.slice(0,10)}
                documents={this.state.documents}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
            
            </div>

            </div>
        
         
        )
    }


}

export default EditPage;