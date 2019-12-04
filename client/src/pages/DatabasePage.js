// import react and required components

import React from "react";

import { Container } from "../components/Grid";

// import SearchForm from "../components/SearchForm"

import DatabaseData from "../components/DatabaseData"

import PagesNavBar from "../components/PagesNavbar";

import API from "../utils/API";


// class for database page

class DatabasePage extends React.Component {

    // state obj with results array to store all data from database

    state = {
        results: []
    }
    

    // when page loads, display all jobs saved in database for user

    componentDidMount() {

        this.loadJobs()

    }


    // sign out method

    signOut = () => {
        document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000";
    }


    // load jobs method
    
    loadJobs = () => {

        API.getJobs()

        // setting state with results from api call to get jobs

        .then(res => this.setState({results: res.data}))
        .catch(err => console.log(err))

    }


    // delete method to delete jobs when delete button is clicked

    deleteJob = id => {
        API.deleteJob(id)
        .then(res => {
            console.log(res)
            this.loadJobs()})
        .catch(err => console.log(err))
    }


    // render method with navbar and required components

    render () {
        return (
            <div id="data-page">
                <PagesNavBar signOut={this.signOut}/>
                <Container>                
                    <DatabaseData 
                        results={this.state.results}
                        deleteJob={this.deleteJob}
                    />            
                </Container>

            </div>
        )
    }


}



export default DatabasePage;