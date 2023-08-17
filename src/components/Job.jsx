import React from "react";
import "./Job.css";

function Job({
  title,
  period,
  position,
  location,
  description,
  tasks,
  url,
  logo,
}) {
  return (
    <div className="job">
      <a className="job-link" href={url}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {logo && (
            <img
              src={logo}
              alt={`${title} logo`}
              style={{ width: "50px", marginRight: "10px" }}
            />
          )}
          <h3 style={{ color: "orange" }}>
            {title} ({period})
          </h3>
        </div>
      </a>
      <p>
        <strong>Position:</strong> {position}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Job;
