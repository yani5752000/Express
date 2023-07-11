import React from "react";
import Person from "./Person";

class Persons extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.persons.map((person, i) => {
                        return <li key={i}>
                            <Person key={i} person={person}></Person>
                        </li>
                    })}
                </ol>
            </div>
        )
    }
}

export default Persons;