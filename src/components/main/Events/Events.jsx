import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Events.css";
const Events = () => {
  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          {" "}
          <div className="container">
            <button onClick={toggleSlider}>Toggle Slider</button>
            <div className={`slider ${showSlider ? "active" : ""}`}>
              <p>This is a sliding component!</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Events;
