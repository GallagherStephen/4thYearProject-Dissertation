import React from 'react';
import '../App.css';
import { CardDeck } from 'react-bootstrap';

class CollegeTweets extends React.Component{

  render(){
    return(

<body>



  <main>
    
  <section class="presentation">
        

        <div class = "intro-text">
        <h1> Twitter Feeds</h1> 
        <br></br>   

        <p>NUIG</p>
        <a class="twitter-timeline" data-width="500" data-height="1200" data-theme="dark" href="https://twitter.com/nuigalway?ref_src=twsrc%5Etfw">Tweets by nuigalway</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
     
        <p>GMIT</p>
        <a class="twitter-timeline" data-width="500" data-height="1200" data-theme="dark" href="https://twitter.com/GMITOfficial?ref_src=twsrc%5Etfw">Tweets by GMITOfficial</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        
        </div>

        <div class = "cover">    
        <img src = "https://lh3.googleusercontent.com/proxy/HJhwHOV7wldrzfAgnMRqWdDwpK4HwE7kfRl5VMbba6d7X3j7xioKjOlVp9mGP0V25oJqgtOlFFI5WpF0zgQeGCwryj5BnAgOIkVwpaPxr280jCg7MhaZzEwYkKY" alt="laptop" border="0" alt="laptop"></img>  
        </div>

        </section>
  </main>

</body>
    )
  }
}

export default CollegeTweets;