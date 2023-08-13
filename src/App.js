import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar options={["Option 1", "Option 2", "Option 3", "Option 4"]} />
    </div>
  );
}

export default App;
