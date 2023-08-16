import React from "react";

function Job({ title, period, position, location, description, tasks, url }) {
  return (
    <div className="job">
      <a href={url}>
        <h3 style={{ color: "orange" }}>
          {title} ({period})
        </h3>
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
