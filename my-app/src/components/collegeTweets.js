import React from 'react';
import '../App.css';
import { CardDeck } from 'react-bootstrap';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class CollegeTweets extends React.Component{

  render(){
    return(

<body>



  <main>
    <h1 class="pageHeadings" ><b>Twitter Feeds</b></h1>
    <h2 class="pageHeadings" >If You have a Query that needs help leave a comment and us or our community will help!</h2>
  <section class="presentation">
        
 
        <div class = "intro-text">
        
        <br></br>   

        <TwitterTimelineEmbed/>
        
        </div>

        
        <div class="tweetboxes">
        <h2>nuigalway</h2>
        <a class="twitter-timeline" data-width="500" data-height="1200" data-theme="dark" href="https://twitter.com/nuigalway?ref_src=twsrc%5Etfw">Tweets by nuigalway</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <div class="tweetboxes">
        <h3>GMITOfficial</h3>
        <a class="twitter-timeline" data-width="500" data-height="1200" data-theme="dark" href="https://twitter.com/GMITOfficial?ref_src=twsrc%5Etfw">Tweets by GMITOfficial</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        
        <div class="tweetboxes">
        <h2>ucddublin</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/ucddublin?ref_src=twsrc%5Etfw">Tweets by ucddublin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <div class="tweetboxes">
        <h2>corkbeo</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/corkbeo?ref_src=twsrc%5Etfw">Tweets by corkbeo</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <div class="tweetboxes">
        <h2>Limerick_ie</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/Limerick_ie?ref_src=twsrc%5Etfw">Tweets by Limerick_ie</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <div class="tweetboxes">
        <h2>LYIT</h2>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/LYIT?ref_src=twsrc%5Etfw">Tweets by LYIT</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <div class="tweetboxes">
        <h4>kerrycollegemvc</h4>
        <a class="twitter-timeline" data-width="800" data-height="1200" data-theme="dark" href="https://twitter.com/kerrycollegemvc?ref_src=twsrc%5Etfw">Tweets by kerrycollegemvc</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        </section>
  </main>



  <footer class="footer">
    
    <div class="footer-left">
      <p> EMAIL:</p>
      <div class="EMAILS">
      <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="links"><i class="fas fa-envelope-open-text"></i></a>
      <a href="https://login.yahoo.com/?.src=ym&lang=en-IE&done=https%3A%2F%2Fcompose.mail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAADlDGpV6pum4FITVuF7Db-jTGFPbskUswfQLo0fYGfwlNN7cfAmynzGsEs687ORynEiAr8bNB5UR03gGLM5sR7myaex3iYL3mtYdDDgwrWIENY9xNF9DJah1Ru-FNixEO0438QWxU9jj1rdAxSpYuYg7ocuqKZVYaVw1EEGScu-_" class="links"><i class="far fa-envelope-open"></i></a> 
      <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1616009712&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dc4246c91-97f3-0de7-1150-e92607a95666&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015" class="links"><i class="far fa-envelope"></i></a>
      </div>
    </div>
    </footer>


</body>
    )
  }
}

export default CollegeTweets;