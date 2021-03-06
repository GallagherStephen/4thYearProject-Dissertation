import React from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../App.css';

class Query extends React.Component {
 constructor(props){
    super(props);

    // State Object
    this.state = {Name:"", Email:"", Feedback:""};

    // Handle Method Declaration
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
 }

 //Method definitions for setting variables to user input
 handleNameChange(e){
    this.setState({Name: e.target.value});
  }
  handleEmailChange(e){
    this.setState({Email: e.target.value});
  }
  handleFeedbackChange(e){
    this.setState({Feedback: e.target.value});
  }

  // Handle Submit Methods
  handleQuerySubmit(e){
    if(this.state.Name != null && this.state.Email != null && this.state.Feedback != null){
      e.preventDefault();
    
    const newQuery = {
      name: this.state.Name,
      email: this.state.Email,
      feedback: this.state.Feedback,
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/forums', newQuery) 
    .then()
    .catch();

    this.setState({ Name:"", Email:"", Feedback:""});  
      alert("Thank You for your Query! It has been submitted to our Forum Page.")
    }
    else {
        alert("All fields haven't text inserted! Please enter Text in all fields.")
    } 
  }

  render() {
      return (
          <div>
              <h1><b>Query Page</b></h1>
              <h2>If You have a Query that needs help leave a comment and us or our community will help!</h2>
              <div class="bodyFormat">
                <div class="centerElement">
                  <Form onSubmit={this.handleQuerySubmit}>
                  <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control as="input" value={this.state.Name} onChange={this.handleNameChange}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control as="input" value={this.state.Email} onChange={this.handleEmailChange}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Feedback</Form.Label>
                      <Form.Control as="input" value={this.state.Feedback} onChange={this.handleFeedbackChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Add Query</Button>
                  </Form>
                </div>
               <br></br>
              </div>
          </div>
      );
  }
}
export default Query;