import React from 'react';
import '../App.css';

class login extends React.Component{

  render(){
    return(


<body>

  <main>

        <h1 class="pageHeadings" ><b> Login Page </b></h1>
        
        <section class="presentation">
               
                  <div class = "introduction">
                    
                      <div class = "intro-text">
                       
                      <h1> </h1>
                      <p>
                        
                      </p>
                      
                  </div>

                  <br></br>
                  <br></br>

                  <div class="container">
                    
                    <h2 class ="pageHeadings">Login Here:</h2>

                    <div class="pageHeadings">
                    <br></br>
                    Username:
                    <br></br>
                    <input type="text" id="username" placeholder="Username"></input>
                    <br></br>
                    <br></br>
                    Password:
                    <br></br>
                    <input type="text" id="name" placeholder="Password"></input>
                    <br></br>
                    <br></br>
                    
                    <button class ="cta-add" type="submit" >Login</button>
                    </div>
                    
                </div>    
                  
                      


              </div>
                  <div class = "cover">
                    
                  <img src = " https://cdn.dribbble.com/users/89373/screenshots/4937800/dribbble_padlock_shot.gif"  border="0" alt="laptop"></img>
                  
                  </div>
             
      </section>
      <img  class = "backgroundImage" src = "https://i.ibb.co/NrWkrnC/background.jpg"  /> 
      
  </main>

  

  <footer class="footer">
    
    <div class="footer-left">
      <img src="logo.png" alt=""></img>
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

export default login;
