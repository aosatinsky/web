import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ options = [], onOptionSelect }) {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (index, option) => {
    setSelected(index);
    if (onOptionSelect) {
      onOptionSelect(option);
    }
    setIsOpen(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isOpen && (
        <div className="overlay show" onClick={() => setIsOpen(false)}></div>
      )}

      <div className={`navbar-container ${isOpen ? "open" : ""}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selected === index ? "selected" : ""}`}
            onClick={() => handleOptionSelect(index, option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </div>
  );
}

export default Navbar;
