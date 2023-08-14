import React from "react";
import "./MoreInfo.css";

function MoreInfo() {
  return (
    <div className="more-info-container">
      <h2>Contact Me!</h2>
      {/* Links to LinkedIn and GitHub */}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/aosatinsky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/linkedin.svg"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
        <a
          href="https://github.com/aosatinsky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/github.svg"
            alt="GitHub"
            className="social-icon"
          />
        </a>
      </div>
      <p>
        <a href="mailto:osatinsky.tech@gmail.com">osatinsky.tech@gmail.com</a>
      </p>
      {/* <p>Location: </p> */}
      {/* <p>Phone: </p> */}
      <p>
        If you're interested in working together or learning more about what I
        do, don't hesitate to reach out!
      </p>

      <a target="_blank" href="https://icons8.com">
        icons provided by Icons8
      </a>
    </div>
  );
}

export default MoreInfo;
