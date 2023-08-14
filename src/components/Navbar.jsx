import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ options = [], onOptionSelect }) {
  const [selected, setSelected] = useState(0);
  const [activeOption, setActiveOption] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const rotationAngle = 80 / (options.length - 1);

  return (
    <div className="navbar-container">
      <div
        className="circle"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${activeOption === index ? "selected" : ""}`}
            style={{ top: `${(index / (options.length - 1)) * 100}%` }}
            onMouseEnter={() => {
              setSelected(index);
              setActiveOption(index);
              if (onOptionSelect) {
                onOptionSelect(option);
              }
            }}
          >
            {option}
          </div>
        ))}
        {isHovered && selected !== null && (
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
