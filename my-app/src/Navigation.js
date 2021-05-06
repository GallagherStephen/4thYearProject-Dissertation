import React from 'react';
import axios from 'axios';
import Home from './components/home';
import Classes from './components/classes';
import Help from './components/help';
import Query from './components/query';
import ForumPage from './components/forumPage';
import AddNotes from './components/addNotes';
import covid19FAQs from './components/covid19FAQs';
import CollegeTweets from './components/collegeTweets';
import SportsPage from './components/sportsPage';
import TechPage from './components/techPage';
import Chat from './components/chat';
import WebcamCapture from './components/webcamCapture';
import Webcam from './components/webcam';
import WebcamRoom from './components/webcamRoom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";


const Navigation = ({ handleLogout }) =>  {
  return (
    <BrowserRouter>
      <div className="nav">
      <Navbar className="navbar-dark navBarOpacity" sticky="top">
        <img src="LogoWhite.png" width="90" height="70" alt="logo" />
        <h4 class="navbar-brand" href="/">Student-Mania</h4>
        <br></br>
           <a href="https://www.facebook.com/Student-mania-108833497918996/?ref=page_internal" class="links"><i class="fab fa-facebook-square"></i></a>
           <a href="https://www.instagram.com/student.mania/" class="links"><i class="fab fa-instagram-square"></i></a>
           <a href="https://linktr.ee/Student.Mania" class="links"><i class="fas fa-link"></i></a>
          <Nav className="navColor">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Contact Section">
            <NavDropdown.Item href="/help">Help Page</NavDropdown.Item>
            <NavDropdown.Item href="/query">Query Page</NavDropdown.Item>
            <NavDropdown.Item href="/forumPage">Forum Page</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources">
            <NavDropdown.Item href="/covid19FAQs">Covid 19 FAQs</NavDropdown.Item>
            <NavDropdown.Item href="/collegeTweets">Tweets</NavDropdown.Item>
            <NavDropdown.Item href="/sportsPage">Sports</NavDropdown.Item>
            <NavDropdown.Item href="/techPage">Useful Software</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Social">
            <NavDropdown.Item href="/webcamCapture">webcamCapture</NavDropdown.Item>
            <NavDropdown.Item href="/webcam">webcam</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/chat">Student-Mania</Nav.Link>
            <button className="cta-select" onClick={handleLogout}>Logout</button>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          <Route exact path='/' component={Chat}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/classes' component={Classes}/>
          <Route exact path='/help' component={Help}/>
          <Route exact path='/query' component={Query}/>
          <Route exact path='/forumPage' component={ForumPage}/>
          <Route exact path='/covid19FAQs' component={covid19FAQs}/>
          <Route exact path='/collegeTweets' component={CollegeTweets}/>
          <Route exact path='/sportsPage' component={SportsPage}/>
          <Route exact path='/techPage' component={TechPage}/>
          <Route exact path='/addNotes' component={AddNotes}/>
          <Route exact path='/webcamCapture' component={WebcamCapture}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/webcam' component={WebcamRoom}/>
          <Route path='/room/:roomID' component={Webcam}/>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default Navigation;
