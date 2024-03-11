import React from 'react';

function Links({github, linkedin}) {
  return (
    <div>
      <h3>Links</h3>
      {/* Add visible text content for GitHub link */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        {github} {/* Display the URL as link text */}
      </a>
      <br />
      {/* Add visible text content for LinkedIn link */}
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin} {/* Display the URL as link text */}
      </a>
    </div>
  );
}

export default Links;