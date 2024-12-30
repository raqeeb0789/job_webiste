import React from "react";

function Hero() {
  return (
    <section className="hero">
      <h1>INDIA'S #1 JOB PLATFORM</h1>
      <h2>Your job search ends here</h2>
      <p>Discover career opportunities</p>
      <div className="search-bar">
        <input type="text" placeholder="Search jobs by 'Skill'" />
        <input type="text" placeholder="Job Location" />
        <button>Search jobs</button>
      </div>
    </section>
  );
}

export default Hero;
