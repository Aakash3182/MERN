import React, { useState } from "react";
import "./Es4.css"

function Es4(props) {
  const [view, setView] = useState(false);

  const openModal = () => {
    setView(true);
  };

  const closeModal = () => {
    setView(false);
  };

  return (
    <div>
      <h2>Custom Modal using State</h2>

      <button onClick={openModal}>Show Modal</button>

      {
      view ? (
        <div className="modal">
          <button onClick= {closeModal}>Close</button>
          <div>
            <h1>Hello World</h1>
          </div>
        </div>
      ) : null 
      }
    </div>
  );
}

export default Es4