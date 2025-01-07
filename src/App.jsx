import React, { Component } from 'react';
import './App.css';
import logo from '/icons/logo.png';
import userIcon from '/icons/user.png';
import linkedinIcon from '/icons/linkedin.png';
import twitterIcon from '/icons/twitter.png';
import facebookIcon from '/icons/facebook.png';
class App extends Component {
  render() {
    return (
      <div id="container">
        <div id ='popup'>
          <div id="popup-window">
            <div className="signin_container">
              <div id="signin_header">
                <h2>Login</h2>
              </div>
              <div id="signin_body">
              <label htmlFor="username">User Name: </label>
              <input type="text" placeholder="User Name" id='username'/> 
              <label htmlFor='password'>Password: </label>
              <input type="password" placeholder='Password' id='password' />
              <p>Forgot <span id='forgot_text'>Password ?</span></p>
              <p>Signup</p>
              </div>
            </div>
          
          </div>
        </div>
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Job Portal" />
            <span id='job'><b>Job</b></span> Portal
          </div>
          <nav className="nav">
            <img src={userIcon} alt="User Icon" />
            <button className="signin">Sign In</button>
          </nav>
        </header>

        <section className="hero">
          <h1>INDIA'S #1 JOB PLATFORM</h1>
          <h2>Your job search ends here</h2>
          <p>Discover career opportunities</p>
          <div class="search-bar">
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="Search jobs by 'Skill'"
      aria-label="Search jobs by Skill"
    />
    <img src="/icons/searchicon.png" alt="Search Icon" class="search-icon" />
  </div>
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="Job Location"
      aria-label="Search by job location"
    />
    <img src="/icons/location.png" alt="location Icon" class="search-icon" />
  </div>
  
  <button type="submit">Search</button>

  </div>

        </section>

        <footer className="footer">
          <p>Copyright © 2024, All rights reserved.</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
