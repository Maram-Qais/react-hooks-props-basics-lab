import React from "react";
import Links from "./Links"; // Ensure this component is imported correctly

function About({bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering of bio */}
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Correctly call the Links component and pass props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;