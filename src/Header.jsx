import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/icons/logo.png" alt="Job Portal" />
        <span>Job Portal</span>
      </div>
      <nav className="nav">
        <button className="signin">Sign In</button>
      </nav>
    </header>
  );
}

export default Header;
