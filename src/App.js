import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import MoreInfo from "./sections/MoreInfo";

function App() {
  const [activeSection, setActiveSection] = useState("ABOUT");

  const sectionsContent = {
    ABOUT: <About />,
    EDUCATION: <Education />,
    EXPERIENCE: <Experience />,
    SKILLS: <Skills />,
    "MORE INFO": <MoreInfo />,
  };

  const handleNavSelection = (selectedOption) => {
    if (selectedOption === "BLOG") {
      window.open(
        "https://blog.osatinsky.com",
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      setActiveSection(selectedOption);
    }
  };

  // Create navigation options including the blog
  const navOptions = [...Object.keys(sectionsContent), "BLOG"];

  return (
    <div className="App">
      <Navbar options={navOptions} onOptionSelect={handleNavSelection} />
      <Section content={sectionsContent[activeSection]} />
    </div>
  );
}

export default App;
