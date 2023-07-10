import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Persons from './components/Persons';
import axios from 'axios';

class App extends React.Component {
  state = {
    theName: "John",
    persons: [],
    person_names: [],
    obj: {},
    arr: [],
    person1: {
      name: "Howard",
      email: "h@h"
    },
    name: "Howard",
    email: "h@h"
  }
  componentDidMount() {
    console.log("mounted")
    axios.get("http://localhost:8080/obj")
      .then(result => {
        console.log("obj: ", result);
        this.setState({obj: result.data});
        console.log("state.obj :", this.state.obj);
      })
      .catch(error => console.log("error: ", error))
    
    axios.get("http://localhost:8080/persons")
      .then(result => {
        console.log("persons result: ", result);
        const persons = result.data;
        this.setState({person_names: persons.map(person => person.name)});
        this.setState({persons: persons})
        console.log("state.persons: ", this.state.person_names);
        const he = this.state.person_names[0];
        // console.log("print type of he: ", typeof he);
        // console.log("print keys of he: ", Object.keys(he));
        // console.log("print person: ", this.state.persons)
      })

    axios.get("http://localhost:8080/arr")
      .then(result => {
        console.log("arr result: ", result);
        const arr = result.data;
        this.setState({arr});
        console.log("state.arr: ", this.state.arr);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Hi here</h1>
          <h1>The name is {this.state.theName}</h1>
          <h1>a is {this.state.obj.a}</h1>
          <h1>b is {this.state.obj.b}</h1>
          <h1>arr[0] is {this.state.arr[0]}</h1>
          <h1>arr[1] is {this.state.arr[1]}</h1>
          <h1>persons[0] is {this.state.person_names[0]}</h1>
          <h1>persons[1] is {this.state.person_names[1]}</h1>
          <h1>persons[2] is {this.state.person_names[2]}</h1>
          <Person name = {this.state.name} email = {this.state.email} person={this.state.person1} />
          <Persons persons={this.state.persons}></Persons>
        </header> 
      </div>
    );
  }
}

export default App;
