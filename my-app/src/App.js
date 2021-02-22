import React from 'react';
import axios from 'axios';
import Home from './components/home';
import Classes from './components/classes';
import Help from './components/help';
import Query from './components/query';
import ForumPage from './components/forumPage';
import Webcam from './components/webcam';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";



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
            <NavDropdown title="Contact Section">
            <NavDropdown.Item href="/help">Help Page</NavDropdown.Item>
            <NavDropdown.Item href="/query">Query Page</NavDropdown.Item>
            <NavDropdown.Item href="/forumPage">Forum Page</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/webcam">webcam</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/classes' component={Classes}/>
          <Route exact path='/help' component={Help}/>
          <Route exact path='/query' component={Query}/>
          <Route exact path='/forumPage' component={ForumPage}/>
          <Route exact path='/webcam' component={Webcam}/>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
