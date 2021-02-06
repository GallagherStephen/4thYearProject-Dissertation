import React from 'react';
import '../App.css';

class Home extends React.Component{

  render(){
    return(

<body>



  <main>

        <section class="presentation">
               
                  <div class = "introduction">
                      <div class = "intro-text">
                      <h1>Aplication for the Future</h1>
                      <p>
                        Welcome to Student-Mania the worlds best student application
                      </p>
                  </div>

                  <div class="cta">
                      <button class ="cta-select" >Features</button>
                      <button class ="cta-add" >Download</button>
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

export default Home;