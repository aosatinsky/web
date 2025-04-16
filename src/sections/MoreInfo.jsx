import React from "react";
import "./MoreInfo.css";

function MoreInfo() {
  return (
    <div className="more-info-container">
      <h2 style={{ color: "orange" }}>Contact Me!</h2>
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
        <a style={{ color: "#ffd580" }} href="mailto:hola@osatinsky.tech">
          agustin@osatinsky.com
        </a>
      </p>
      {/* <p>Location: </p> */}
      {/* <p>Phone: </p> */}
      <p>
        If you're interested in working together or learning more about what I
        do, don't hesitate to reach out!
      </p>

      <a target="_blank" rel="noreferrer" href="https://icons8.com">
        icons provided by Icons8
      </a>
    </div>
  );
}

export default MoreInfo;
