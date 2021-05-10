import React from 'react';
import Forums from "./forums";
import '../App.css';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import { CardDeck } from 'react-bootstrap';


class ForumPage extends React.Component{

  state = {
      forums: []
  }

  componentDidMount() {
    // This takes the info for or use with elastic beanstalk and works with the cloud to send info to the domain
      axios.get('https://api.student-mania.com/api/forums')//http://localhost:4000/api/forums
      .then((response)=>{
          this.setState({forums: response.data.forums})
      })
      .catch((error)=>{
          console.log(error);
      });
  }

  render(){
      return(
        <div>
          <h1 class="centerText"><b>Forum Page!</b></h1>
          <h2 class="centerTextwhite" >Welcome to the Forum page, where your Querys are recieved for the community to see!!</h2>
          <div class="bodyFormat">
            <div class="card bg-dark text-white">
              {/* Here it takes the info sent to the forums section and outputs the results into cards */}
              <CardDeck>
                <Forums  theForums={this.state.forums} ReloadDataMethod={this.ReloadDataMethod}></Forums>
              </CardDeck>
              <Button variant="primary" href="/query">Go to Query Page to submit a question?</Button>
              <br></br>
              <Button variant="primary" href="/chat">Go to Chat Page to talk to everyone?</Button>
              <br></br>
              <Button variant="primary" href = 'https://linktr.ee/Student.Mania'>Go to our contacts page for email.</Button>
            </div>
            
          </div>
        </div>
      )
    }
}

export default ForumPage;