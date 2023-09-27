import React from "react";
import Navbar from "./components/navbar";
import Section from "./components/section1";
import Cards from "./components/cards";
function App() {
  return (
    <div className="app-compo">
      <Navbar />
      <Section />
      <div className="component">
        <div className="cards-compo">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
