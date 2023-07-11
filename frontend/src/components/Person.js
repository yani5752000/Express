import React from "react";

class Person extends React.Component {
    // static defaultProps = {
    //     name: "Howard",
    //     email: "h@h"
    // }

    render() {
        return (
            <div>
                <p>id: {this.props.person.id} Name: {this.props.person.name}, email: {this.props.person.email}</p>
            </div>
        )
    }
}

export default Person;