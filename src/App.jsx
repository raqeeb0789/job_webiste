import React, { Component } from 'react';
import './App.css';
import logo from '/icons/logo.png';
import userIcon from '/icons/user.png';
import linkedinIcon from '/icons/linkedin.png';
import twitterIcon from '/icons/twitter.png';
import facebookIcon from '/icons/facebook.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false, // State to control the login/signup toggle
      showPopup: false, // State to control the visibility of the popup
    };
  }

  // Method to toggle the login/signup state
  toggleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  // Method to close the popup
  closePopup = () => {
    this.setState({ showPopup: false });
  };

  // Method to open the popup
  openPopup = () => {
    this.setState({ showPopup: true });
  };

  render() {
    return (
      <div id="container">
  {/* Only render the popup if showPopup is true */}
  {this.state.showPopup && (
  <div id="popup">
    <div id="popup-window">
      <div className="signin_container">
        <div id="signin_header">
          <h2>{this.state.isLogin ? 'Login' : 'Signup'}</h2>
          <h5 onClick={this.closePopup}>X</h5>
        </div>
        <div id="signin_body">
          <form onSubmit={this.handleFormSubmit}>
            {this.state.isLogin ? (
              <>
                {/* Login Form */}
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  required
                />

                <label id="passwordtext" htmlFor="password">Password:</label>
                <input
                  type="password"
                  
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />

                <button type="submit" id="login_button">
                  Login
                </button>
              </>
            ) : (
                <>
                  {/* Signup Form */}
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    required
                  />

                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    required
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />

                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                  />

                  <button type="submit" id="login_button">
                    Signup
                  </button>
                </>
              )}
              <p>
                {this.state.isLogin ? (
                  <>
                    Forgot <span id="forgot_text">Password?</span>
                    <p>
                      Don't have an account?{' '}
                      <span id="forgot_text" onClick={this.toggleLogin}>Signup</span>
                    </p>
                  </>
                ) : (
                  <>
                    Already have an account? <span id="forgot_text" onClick={this.toggleLogin}>Login</span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}


        <header className="header">
          <div className="logo">
            <img src={logo} alt="Job Portal" />
            <span id="job">
              <b>Job</b>
            </span>{' '}
            Portal
          </div>
          <nav className="nav">
            <img src={userIcon} alt="User Icon" />
            <button className="signin" onClick={this.openPopup}>
              Sign In
            </button>
          </nav>
        </header>

        <section className="hero">
          <h1>INDIA'S #1 JOB PLATFORM</h1>
          <h2>Your job search ends here</h2>
          <p>Discover career opportunities</p>
          <div className="search-bar">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search jobs by 'Skill'"
                aria-label="Search jobs by Skill"
              />
              <img
                src="/icons/searchicon.png"
                alt="Search Icon"
                className="search-icon"
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Job Location"
                aria-label="Search by job location"
              />
              <img
                src="/icons/location.png"
                alt="Location Icon"
                className="search-icon"
              />
            </div>
            <button type="submit">Search</button>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p>Copyright © 2024, All rights reserved.</p>
            <div className="social-icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
