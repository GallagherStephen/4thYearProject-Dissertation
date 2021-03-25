import React from 'react';
import '../App.css';

class Classes extends React.Component{

  render(){
    return(
      

      <body>
        <img  class = "backgroundImage" src = "https://i.ibb.co/NrWkrnC/background.jpg"  />

        <h1 class="pageHeadings">Below you can list and manage your classes</h1>

<section class="classes">

<h2 class ="subHeadings">Classes:</h2>

<div class="classBox1">Module 1 : 

<div>This could be the name</div>

</div>

<div class="classBox2">module 2:

<div>image?</div>


</div>

<div class="classBox3">module 3</div>
<div class="classBox4">module 4</div>
<div class="classBox5">module 4</div>
<div class="classBox6">module 4</div>
<div class="classBox7">module 4</div>




</section>
<h2 class ="pageHeadings">Edit classes Here:</h2>

<div class="pageHeadings">
  <br></br>
Insert class name:
<br></br>
<input type="text" id="name"></input>
<br></br>
<br></br>
<button class ="cta-select" >Clear</button>
<button class ="cta-add" >Submit</button>
</div>



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

export default Classes;