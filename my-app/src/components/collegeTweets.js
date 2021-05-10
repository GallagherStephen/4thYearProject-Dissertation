import React from 'react';
import '../App.css';
import { CardDeck } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class CollegeTweets extends React.Component{

  render(){
    return(

<body>



  <main>
  <br></br>
    <h1 class="centerText" ><b>Twitter Feeds</b></h1>
    <h2 class="centerTextwhite" >If You have a Query that needs help leave a comment and us or our community will help!</h2>
    <section class="presentation" >
        
 
        <div class = "intro-text">
        
        <br></br>   

        <TwitterTimelineEmbed/>
        
        </div>
        {/* First embeded twitter box is for gmit twitter feed */}
        <div class="tweetboxes">
        <h3>GMIT</h3>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/GMITOfficial?ref_src=twsrc%5Etfw">Tweets by GMITOfficial</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* Second embeded twitter box is for NUI Galway twitter feed */}
        <div class="tweetboxes">
        <h2>NUI</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/nuigalway?ref_src=twsrc%5Etfw">Tweets by nuigalway</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* Third embeded twitter box is for University College Dublin twitter feed */}
        <div class="tweetboxes">
        <h2>UCD</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/ucddublin?ref_src=twsrc%5Etfw">Tweets by ucddublin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* Fourth embeded twitter box is for University College Cork twitter feed */}
        <div class="tweetboxes">
        <h2>CORK</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/corkbeo?ref_src=twsrc%5Etfw">Tweets by corkbeo</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* Fifth embeded twitter box is for Limerick.ie twitter feed */}
        <div class="tweetboxes">
        <h2>LIMERICK</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/Limerick_ie?ref_src=twsrc%5Etfw">Tweets by Limerick_ie</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* Sixth embeded twitter box is for Letterkenny Institute of Technology twitter feed */}
        <div class="tweetboxes">
        <h2>LYIT</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/LYIT?ref_src=twsrc%5Etfw">Tweets by LYIT</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        
        {/* Last embeded twitter box is for Kerry college of further education twitter feed */}
        <div class="tweetboxes">
        <h4>KERRY</h4>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/kerrycollegemvc?ref_src=twsrc%5Etfw">Tweets by kerrycollegemvc</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        </section>
  </main>


</body>
    )
  }
}

export default CollegeTweets;