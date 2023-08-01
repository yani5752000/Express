import React from "react";
import Form from "../components/Form";

class Register extends React.Component {
    render() {
        let { handleChange, handleSubmit, task } = this.props;
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