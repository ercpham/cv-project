import React from "react";

const About = (props) => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        I'm currently a student at University of California - San Diego pursuing
        a B.S. in Computer Science. I'm an aspiring software engineer, and
        hopefully, this website will be the place to show off what I've learned
        and done!
      </p>
      <h1>Skills</h1>
      <div className = "skillsCont">
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li>Python</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
};

export default About;