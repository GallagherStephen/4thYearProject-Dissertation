import React from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../App.css';

class addNotes extends React.Component {
 constructor(props){
    super(props);

    // State Object
    this.state = {Name:"", Email:"", Notes:""};

    // Handle Method Declaration
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
 }

 //Method definitions for setting variables to user input
 handleNameChange(e){
    this.setState({Name: e.target.value});
  }
  handleEmailChange(e){
    this.setState({Email: e.target.value});
  }
  handleNotesChange(e){                                                                                                  
    this.setState({Notes: e.target.value});                 //<--------------- NEED TO CREATE A NOTES FIELD IN DATABASE!!!???
  }

  // Handle Submit Methods
  handleQuerySubmit(e){
    if(this.state.Name != null && this.state.Email != null && this.state.Notes != null){
      e.preventDefault();
    
    const newQuery = {
      name: this.state.Name,
      email: this.state.Email,
      notes: this.state.Notes,
    };

    //Posts the request to the server, with the newly created Case
    axios.post('http://localhost:4000/api/forums', newQuery) 
    .then()
    .catch();

    this.setState({ Name:"", Email:"", Notes:""});                                              //<--------------- NEED TO CREATE A NOTES FIELD IN DATABASE!!!??
      alert("Thank You for your notes! It has been submitted to our 'notes and Tips' Page.")
    }
    else {
        alert("All fields haven't text inserted! Please enter Text in all fields.")
    } 
  }

  render() {
      return (
          <div>
              <h1><b>Add notes Page</b></h1>
              <h2>If You have any issues adding notes please contact us!</h2>
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
                      <Form.Label>notes</Form.Label>
                      <Form.Control as="input" value={this.state.Notes} onChange={this.handleNotesChange}/>     
                    </Form.Group>
                    <Button variant="primary" type="submit">Add Notes</Button>
                  </Form>
                </div>
               <br></br>
              </div>
          </div>
      );
  }
}
export default addNotes;