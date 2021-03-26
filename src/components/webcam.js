import React from 'react';
import '../App.css';

class Webcam extends React.Component{

  render(){
    return(

<body>

<a class="twitter-timeline" data-width="500" data-height="1200" data-theme="dark" href="https://twitter.com/nuigalway?ref_src=twsrc%5Etfw">Tweets by nuigalway</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <main>

        <section class="presentation">
               
                  <div class = "introduction">
                      <div class = "intro-text">
                      <h1>Welcome to Student-Mania's Webcam Page</h1>
                      <p>
                        worlds best student application
                      </p>
                  </div>
              </div>

              <div>
              <img src = "./img/laptop.png" alt="laptop"></img>
              </div>
              
      </section>
  </main>

</body>
    )
  }
}

export default Webcam;