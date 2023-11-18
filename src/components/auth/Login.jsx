import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };
  return (
    <React.Fragment>
      <h2></h2>
      <div
        className={
          isSignUpActive ? "container right-panel-active" : "container"
        }
        id="container"
      >
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Login</h1>
            <input type="text" placeholder="Phone number" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Login</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome!</h1>
              <p>Create an account and start journey with us</p>
              <p>Already have an account?</p>
              <button class="ghost" id="signIn" onClick={handleSignInClick}>
                Login
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello</h1>
              <p>New here? </p>
              <button class="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer></footer>
    </React.Fragment>
  );
};

export default Login;
