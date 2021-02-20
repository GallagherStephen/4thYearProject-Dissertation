import React from 'react';
import '../App.css';

class Help extends React.Component{

  render(){
    return(
      <body>
          <img  class = "backgroundImage" src = "https://i.ibb.co/NrWkrnC/background.jpg"  />
  <main>
      <h1 class ="pageHeadings" >Welcome to Student-Mania's Help Page</h1>
        <section class="presentation">

               
                  
                <div class = "introduction">

                  <div class = "intro-text">
                      <h1>Website Video</h1>
                      <p>
                       Help navigation of the website :
                      </p>
                  </div>
              </div>

              <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/vX-YnSQkRyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              
      </section>
  </main>

</body>



    )
  }
}

export default Help;