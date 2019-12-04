// import react components

import React, { Component } from "react";

import EditpageData from "../components/EditpageData";

import PagesNavBar from "../components/PagesNavbar";

import API from "../utils/API"


// edit page class

class EditPage extends Component {

    // state obj with names of input fields 

    state = {
        company_name: "",
        location: "",
        position: "",
        description: "",
        application_date: "",
        documents: "",
        message: ""
    }


    // when page loads
    componentDidMount = () => {

        // get job from database with same id as id from brower's parameter

        API.getJob(this.props.match.params.id)
      
        .then(res => {
          
            let data = res.data

            // set state to data got from database          
          
            this.setState({ 
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


    // sign out method for edit page

    signOut = () => {
        document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000";
    }


    // handles changes in input field
    
    handleInputChange = event => {

        console.log(event.target)

        const { name, value } = event.target;

        this.setState({
            [name] : value
        })

        
    };


    // handles form submission

    handleFormSubmit = event => {

        // prevent default form submission

        event.preventDefault();


        // call edit job method with the id and the edited state as arguments

        API.editJob(this.props.match.params.id, this.state)
        .then(editedJob => {
        

            // clear input fields after edited data submission

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

        
            <div id="edit-page">
            <PagesNavBar signOut={this.signOut}/>
            
            <div id="edit-data" className="ml-5 mt-5 mr-5">
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