import React from 'react';
import '../App.css';


import Carousel from 'react-bootstrap/Carousel'

class Home extends React.Component {

  render() {
    return (



      <body>

        <main>

          <h1 class="centerTitleHomeText">Application for the Future</h1>
          <h2 class="centerTextwhite">
            Welcome to Student-Mania the worlds best student application
                      </h2><br></br><br></br><br></br><br></br>

          <section class="covidpageStyle">

            <div class="introduction">

              <div class="intro-text">
                <br></br>


                <h3 class="centerText">Create Chat Rooms</h3>
                <p class="centerText">organized into topic-based rooms where you can collaborate, share, and just talk.<br></br><img class="centerText" src="groupMsg.png" width="250" height="150" /></p>

                <br></br>
                <h3 class="centerText">Share Content</h3>
                <p class="centerText">Making sharing content easier.<br></br><img class="centerText" src="files.png" width="250" height="150" /></p>

                <br></br>
                <h3 class="centerText">Access Resources</h3>
                <p class="centerText">Keep up to date with latest News and Software recommended by Students.<br></br><img class="centerText" src="resources.png" width="250" height="150" /></p>


              </div>


            </div>
            <div class="cover">
              <br></br>

              <Carousel fade>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="chat rooms 1.png"
                    alt="First slide"
                  /><h3 class="centerTextwhite">Chat Rooms</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="chat rooms.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">Share Files</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="tweets.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">See what is trending in colleges around the country</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="sports.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">Keep up to date with sports in multiple colleges</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="software.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">Easy access to recommended software</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="links.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">Access to Applications social media Accounts and Emails</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="queries.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">Submit questions for people to see</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="forum.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">View questions and either contact them by email or over in Chat</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="QR.png"
                    alt="Second slide"
                  /><h3 class="centerTextwhite">Share QR code with others for easy access to Application</h3>
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>


            </div>

          </section>

        </main>
      </body>


    )
  }
}

export default Home;