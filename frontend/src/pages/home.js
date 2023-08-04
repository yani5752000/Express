import React from "react";

class Home extends React.Component {
    render() {
        return (
            <>
            <h3>Welcome {this.props.userEmail}</h3>
            </>
        )
    }
}

export default Home;