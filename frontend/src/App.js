import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Persons from './components/Persons';
import Posts from './components/Posts';
import Form from './components/Form';
import axios from 'axios';

class App extends React.Component {
  state = {
    persons: [],
    posts: [],
    users: [],
    newUserCredentials: {
      email: "",
      password: ""
    }
  }
  componentDidMount() {
    console.log("mounted")
    
    this.getPersons();
    this.getPosts();
  }
  getPersons = () => {
    axios.get("http://localhost:8080/persons")
      .then(result => {
        console.log("persons result: ", result);
        const persons = result.data;
        this.setState({persons: persons});
      })
      .then(() => {
        console.log("state.persons: ", this.state);
      })
  }

  createPerson = () => {
    const name = prompt("Enter the name: ");
    const email = prompt("Enter the email: ");
    console.log("in createPerson: ", name + " " + email);

    axios.post("http://localhost:8080/persons/new", {name, email})
      .then(result => {
        console.log("persons result: ", result);
        this.getPersons();
      })
  }

  deletePerson = () => {
    const id = prompt("Enter the id: ");
    axios.delete(`http://localhost:8080/persons/delete/${id}`)
      .then((result) => {
        console.log("delete result: ", result);
        this.getPersons();
      })
      .catch((error) => console.log(error))
  }

  getPosts = () => {
    axios.get("http://localhost:8080/posts")
      .then(result => {
        console.log("posts result: ", result);
        const posts = result.data;
        this.setState({posts: posts});
      })
  }

  createPost = () => {
    const content = prompt("Enter the content: ");
    console.log("in createPost: ", content);

    axios.post("http://localhost:8080/posts/new", {content})
      .then(result => {
        console.log("posts result: ", result);
        this.getPosts();
      })
  }

  deletePost = () => {
    const id = prompt("Enter the id: ");
    axios.delete(`http://localhost:8080/posts/delete/${id}`)
      .then((result) => {
        console.log("delete result: ", result);
        this.getPosts();
      })
      .catch((error) => console.log(error))
  }

  registerUser = () => {
    const email = prompt("enter email");
    const password = prompt("enter password");
    axios.post("http://localhost:8080/register", {email, password})
      .then(() => console.log("success"));
  }

  handleRegisterFormChange = (event) => {
      let input_name = event.target.name;
      let input_value = event.target.value;
      let userCredentials = this.state.newUserCredentials;

      if (userCredentials.hasOwnProperty(input_name)) {
        userCredentials[input_name] = input_value;
        this.setState({ newUserCredentials: userCredentials });
      }
  };

  handleRegisterSubmit = () => {
    const email = this.state.newUserCredentials.email;
    const password = this.state.newUserCredentials.password;
    axios.post("http://localhost:8080/register", {email, password})
      .then()
  };

  getUsers = () => {
    axios.get("http://localhost:8080/users")
      .then(result => {
        this.setState({users: result.data})
      })
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi here</h1>
          
          <Persons persons={this.state.persons}></Persons>
          <button style={{height:50, width: 100, color:"blue", backgroundColor:"red"}} onClick={this.createPerson}>Create Person</button>
          <button style={{height:50, width: 100, color:"blue", backgroundColor:"red"}} onClick={this.deletePerson}>Delete Person</button>
          <Posts posts={this.state.posts}></Posts>
          <button style={{height:50, width: 100, color:"blue", backgroundColor:"red"}} onClick={this.createPost}>Create Post</button>
          <button style={{height:50, width: 100, color:"blue", backgroundColor:"red"}} onClick={this.deletePost}>Delete Post</button>
          <button style={{height:50, width: 100, color:"blue", backgroundColor:"red"}} onClick={this.registerUser}>Register</button>
          <Form 
            handleChange={this.handleRegisterFormChange} 
            handleSubmit={this.handleRegisterSubmit}>
          </Form>
          <p>hhii: {this.state.newUserCredentials.email}</p>
        </header> 
      </div>
    );
  }
}

export default App;
