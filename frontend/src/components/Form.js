import React from "react";

class Form extends React.Component {
    register = () => {

    };

    handleEmailChange = () => {

    };

    handlePasswordChange = () => {

    };

    render() {
        return (
            <form onSubmit={this.register}>
                <h3>Register</h3>
                <label>Email</label>
                <input type='email' onChange={this.handleEmailChange}></input>
                <label>Password</label>
                <input onChange={this.handlePasswordChange}></input>
                <button type='submit'>Register</button>
            </form>
        )
    }
}

export default Form;