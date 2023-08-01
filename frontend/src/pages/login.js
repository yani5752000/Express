import React from "react";

class Login extends React.Component {
    render() {
        let { handleChange, handleSubmit } = this.props;
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