import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Languages from "./sections/Languages";

function App() {
  const [activeSection, setActiveSection] = useState("ABOUT");

  const sectionsContent = {
    ABOUT: <About />,
    EDUCATION: <Education />,
    EXPERIENCE: <Experience />,
    SKILLS: <Skills />,
    LANGUAGES: <Languages />,
  };

  return (
    <div className="App">
      <Navbar
        options={Object.keys(sectionsContent)}
        onOptionSelect={(selectedOption) => {
          setActiveSection(selectedOption);
        }}
      />
      <Section content={sectionsContent[activeSection]} />
    </div>
  );
}

export default App;
