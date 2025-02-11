import React, { Component } from 'react';
import './App.css';
import logo from '/icons/logo.png';
import userIcon from '/icons/user.png';
import linkedinIcon from '/icons/linkedin.png';
import twitterIcon from '/icons/twitter.png';
import facebookIcon from '/icons/facebook.png';

// The API call function
export function callApi(reqmethod, url, data, responseHandler) {
  var option;

  if (reqmethod === "GET" || reqmethod === "DELETE") {
    option = { method: reqmethod, headers: { 'Content-Type': 'application/json' } };
  } else {
    option = { 
      method: reqmethod, 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(data) 
    };
  }

  fetch(url, option)
    .then(response => {
      if (!response.ok) throw new Error(response.status + " " + response.statusText);
      return response.text();
    })
    .then(data => responseHandler(data))
    .catch(error => alert(error));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      showPopup: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      username: '',
      loginPassword: '',
    };
  }

  toggleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  openPopup = () => {
    this.setState({ showPopup: true });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.isLogin) {
      // LOGIN API CALL
      callApi(
        "POST",
        "http://localhost:8056/users/signin",
        { email: this.state.email, password: this.state.loginPassword },
        (response) => {
          if (response.startsWith("200::")) {
            alert("Login successful");
            this.closePopup();
          } else {
            alert("Invalid credentials");
          }
        }
      );
    } else {
      // SIGNUP API CALL
      if (this.state.password !== this.state.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      callApi(
        "POST",
        "http://localhost:8056/users/signup",
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          role: this.state.role,
          password: this.state.password
        },
        (response) => {
          if (response.startsWith("200::")) {
            alert("Signup successful!");
            // Reset form fields after successful signup
            this.setState({
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              role: '',
              username: '',
              loginPassword: '',
            });
            // Switch to the login form
            this.toggleLogin();
          } else {
            alert("Email already exists!");
          }
        }
      );
    }
  };

  render() {
    return (
      <div id="container">
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
                        <label htmlFor="username">Username:</label>
                        <input
                          type="text"
                          id="username"
                          placeholder="Enter your username"
                          value={this.state.username}
                          onChange={this.handleInputChange}
                          required
                        />

                        <label htmlFor="loginPassword">Password:</label>
                        <input
                          type="password"
                          id="loginPassword"
                          placeholder="Enter your password"
                          value={this.state.loginPassword}
                          onChange={this.handleInputChange}
                          required
                        />

                        <button className="submitbutton" type="submit">Login</button>
                      </>
                    ) : (
                      <>
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

                        <label htmlFor="role">Role:</label>
                        <select
                          id="role"
                          value={this.state.role}
                          onChange={this.handleInputChange}
                          required
                        >
                          <option value="" disabled>Select Role</option>
                          <option value="1">Admin</option>
                          <option value="2">Employee</option>
                          <option value="3">Job Seeker</option>
                        </select>

                        <label htmlFor="password">Password:</label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Enter your password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          required
                        />

                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          placeholder="Re-enter the password"
                          value={this.state.confirmPassword}
                          onChange={this.handleInputChange}
                          required
                        />

                        <button className='submitbutton' type="submit">Signup</button>
                      </>
                    )}
                    <p>
                      {this.state.isLogin ? (
                        <>
                          Forgot <span id="forgot_text">Password?</span>
                          <p>
                            Don't have an account?{' '}
                            <span id="forgot_text" onClick={this.toggleLogin}>
                              Signup
                            </span>
                          </p>
                        </>
                      ) : (
                        <>
                          Already have an account?{' '}
                          <span id="forgot_text" onClick={this.toggleLogin}>
                            Login
                          </span>
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
              <img src="/icons/searchicon.png" alt="Search Icon" className="search-icon" />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Job Location"
                aria-label="Search by job location"
              />
              <img src="/icons/location.png" alt="Location Icon" className="search-icon" />
            </div>
            <button type="submit">Search</button>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
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
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
