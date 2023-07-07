import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    name: "John",
    persons: [],
    obj: {},
    arr: []
  }
  componentDidMount() {
    console.log("mounted")
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        console.log(result.data);
        const persons = result.data;
        this.setState({persons})
        console.log("print: ", this.state.persons)
      })

    axios.get("http://localhost:8080/obj")
      .then(result => {
        console.log("obj: ", result);
        this.setState({obj: result.data});
        console.log("state.obj :", this.state.obj);
      })
      .catch(error => console.log("error: ", error))

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
          <h1>The name is {this.state.name}</h1>
          <h1>a is {this.state.obj.a}</h1>
          <h1>b is {this.state.obj.b}</h1>
          <h1>arr[0] is {this.state.arr[0]}</h1>
          <h1>arr[1] is {this.state.arr[1]}</h1>

        </header>
      </div>
    );
  }
}

export default App;
