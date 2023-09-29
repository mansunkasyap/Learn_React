import React from "react";
import Navbar from "./components/navbar";
import Section from "./components/section1";
import Cards from "./components/cards";
import img1 from "./images/card1.jpg";
import img2 from "./images/card2.jpg";
import img3 from "./images/card3.jfif";
import star from "./images/Star_icons.png"


function App() {
  return (
    <div className="app-compo">
      <Navbar />
      <Section />
      <div className="component">
        <div className="cards-compo">
          <Cards
            img={img1}
            name="Star Garage"
            price="3990"
          />

          <Cards
            img={img2}
            name="Star Bunglow"
            price="9990"
          />
          <Cards
            img={img3}
            name="Kevin Garage"
            price="7999"
          />
          <Cards
            img={img1}
            name="PoleStar"
            price="4990"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
