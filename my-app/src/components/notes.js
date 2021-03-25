import React from 'react';
import Forums from "./forums";
import '../App.css';
import axios from 'axios';
import { CardDeck } from 'react-bootstrap';


class notes extends React.Component{

  state = {
      forums: []
  }

  componentDidMount() {
      axios.get('http://localhost:4000/api/forums')
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
          <h1><b>Notes Page!</b></h1>
          <h2>Welcome to the Notes and Tips page where your Notes and tips are recieved for the community to see!!</h2>
          <div class="bodyFormat">
          <CardDeck>
              <Forums theForums={this.state.forums} ReloadDataMethod={this.ReloadDataMethod}></Forums>
          </CardDeck>
          </div>
        </div>
      )
    }
}

export default notes;