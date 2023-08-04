import React from "react";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
    render() {
        let { handleChange, handleSubmit, loggedIn, setLoggedInTo } = this.props;

        if(loggedIn) {
            return(
                <Navigate to="/" />
            )
        }

        return (
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <label>Email</label>
                <input type='email' name="email" onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange}></input>
                <button type='submit'>Login</button>
            </form>
        )
    }
}

export default Login;