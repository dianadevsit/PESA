import React from "react";

import { Container, Row, Col } from "../components/Grid";

import Logo from "../components/Logo";

import SearchForm from "../components/SearchForm"

import DatabaseData from "../components/DatabaseData"

import logoImage from "../images.json";

import API from "../utils/API"

class DatabasePage extends React.Component {

    state = {
        results: []
    }
    
    componentDidMount() {

        this.loadJobs()

    }

    
    loadJobs = () => {

        API.getJobs()
        .then(res => this.setState({results: res.data}))
        .catch(err => console.log(err))

    }


    
    deleteJob = id => {
        API.deleteJob(id)
        .then(res => {
            console.log(res)
            this.loadJobs()})
        .catch(err => console.log(err))
    }


    render () {
        return (
            <Container>
                <Logo image={logoImage[0].image} name={logoImage[0].name} />
                <DatabaseData 
                results={this.state.results}
                deleteJob={this.deleteJob}/>            
            </Container>
        )
    }


}

export default DatabasePage;