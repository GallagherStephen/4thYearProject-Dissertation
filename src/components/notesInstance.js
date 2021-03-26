import React from 'react';
import Card from 'react-bootstrap/Card';

import '../App.css';

class notesInstance extends React.Component{              // <---- CLASS NAME SUPPOSED TO BE A CAPITAL TO WORK??

render(){
    return(
        <div class="mx-auto justify-content-center">
            <Card className="bg-dark m-4" border="primary">
                <Card.Body>             
                    <Card.Title>Note:<i><br></br>{this.props.forum.notes}</i></Card.Title>
                    <br></br>
                    <Card.Subtitle>Email: {this.props.forum.email}</Card.Subtitle>
                    <br></br> 
                    <Card.Text>From: {this.props.forum.name} </Card.Text>          
                </Card.Body>
            </Card>
        </div>
        
      )
    }
}

export default notesInstance;