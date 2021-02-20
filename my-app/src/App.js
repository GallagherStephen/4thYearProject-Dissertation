import React from 'react';
import Home from './components/home';
import Classes from './components/classes';
import Help from './components/help';
import Webcam from './components/webcam';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Classes from './components/classes';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar className="navbar-dark navBarOpacity" sticky="top">
        <img src="https://i.ibb.co/5nbLxDc/logo.png" alt="logo" />
        <h4 class="navbar-brand" href="/">Student-Mania</h4>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/classes">classes</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/webcam">webcam</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/classes' component={Classes}/>
          <Route exact path='/help' component={Help}/>
          <Route exact path='/webcam' component={Webcam}/>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
