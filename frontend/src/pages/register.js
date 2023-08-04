import React from "react";
import Form from "../components/Form";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Register extends React.Component {
    render() {
        const { handleChange, handleSubmit, task, registered, setRegisteredTo } = this.props;
        if(registered) {
            setRegisteredTo(false);
            return (
                <Navigate to="/login" />
            )
        }
        return (
            <>
                <Form
                 task={task}
                 handleChange={handleChange} 
                 handleSubmit={handleSubmit}>

                </Form>
            </>
        )
    }
}

export default Register;