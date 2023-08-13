import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ options = [] }) {
  const [selected, setSelected] = useState(0);

  const rotationAngle = 90 / (options.length - 1);

  return (
    <div className="navbar-container">
      <div className="circle">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selected === index ? "selected" : ""}`}
            style={{ top: `${(index / (options.length - 1)) * 100}%` }}
            onClick={() => setSelected(index)}
          >
            {option}
          </div>
        ))}
        {selected !== null && (
          <div
            className="pointer"
            style={{
              transform: `rotate(${
                80 -
                (rotationAngle * (options.length - 1)) / 2 +
                rotationAngle * selected
              }deg)`,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
