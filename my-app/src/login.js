import React from 'react';
import './App.css';

const Login = (props) => {
  
  const{
    email, 
    setEmail, 
    password,
    setPassword,
    handleLogin,
    handleSignup, 
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  
  return (
    <body>
      <main>
      
      <div class = "pageHeadings"> 
      
      

      <div class = "intro-text"> 
      <p class="handwritting">
      "Has made my Student learning alot easier!"<br></br>
       - Patrick S.
      </p>
      <div class = "cover">
      <img src = "https://i.ibb.co/wRspgzj/Login-Logo1.png" alt="laptop" border="0" alt="laptop"></img>
      <img src = "https://i.ibb.co/M9C3qR6/Login-Logo-Laptop.png" alt="laptop" border="0" alt="laptop"></img>
      <img src = "https://i.ibb.co/M9C3qR6/Login-Logo-Laptop.png" alt="laptop" border="0" alt="laptop"></img>
      </div>
     

      <div class = "cover">
      <img src = "https://i.ibb.co/wRspgzj/Login-Logo1.png" alt="laptop" border="0" alt="laptop"></img>
      <p class="handwritting">
      "Best Communication Application on the market"<br></br>
       - James D.
      </p>
      </div>


      <div class = "heading">
      <h1>
      "What Student Mania Has to Offer :"<br></br>
      </h1>

      <div class="row">
      <div class="column">
        <img height = "600" width = "1200" src= "chat rooms 1.png"  />
      </div>
      <div class="column">
        <img height = "600" width = "1200" src= "chat rooms.png" />
      </div>
      <div class="column">
        <img src="" />
      </div>
      </div>
      
      </div>
      </div>
      </div>
      
  <section className="login">
    <h1>Student-Mania <br></br> Login</h1>
    <div className="loginContainer">
      <span></span>
      <label>Username</label>
      <input
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="errorMsg">{emailError}</p>
      <span></span>
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="errorMsg">{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
          <button class ="cta-select" onClick={handleLogin}>Sign In</button>
          <p className="question">Don't have an account? <span className="questionLink" onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
          </>

        ) :(
        <>
        <button class ="cta-add" onClick={handleSignup}>Sign Up</button>
          <p className="question">Have an account ? <span className="questionLink" onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
        </>
        )}
      </div>
    </div>
  </section>
  </main>
  </body>
  )
}


export default Login;
