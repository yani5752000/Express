import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get("http://localhost:8080/login")
            .then(result => {
                if(result.valid) {
                    this.props.setLoggedIn(true);
                    this.props.setUserEmail(result.userEmail);
                } else {
                    this.props.setLoggedInTo(false);
                }
            })
    }
    render() {
       
        
        if(!this.props.loggedIn) {
            return (
                <Navigate to="/login" />
            )
        }
        return (
            <>
            <h3>Welcome {this.props.userEmail}</h3>
            </>
        )
    }
}

export default Home;