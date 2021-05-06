import React from 'react';
import '../App.css';

class Help extends React.Component{

  render(){
    return(
      <body>
          
  <main>
      
      <br></br>
      <h1 class="centerText" >Welcome to Student-Mania's Help Page</h1>
      <br></br>
      <br></br>
      <br></br> 
        <section class="covidpageStyle">

               

                <div class = "introduction">

                  <div class = "intro-text">
                     
                      <br></br>
                      <br></br> 
                      <h1 class="centerText">Website Video</h1>
                      <p class="centerText">
                       To help with navigation of the website :
                      </p>
                      
                  </div>
              </div>

              <div class="centerText">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/vX-YnSQkRyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              
      </section>
  </main>

</body>



    )
  }
}

export default Help;