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
  <section className="login">
    <h1>Login</h1>
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
  )
}


export default Login;
