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

</body>



    )
  }
}

export default Classes;