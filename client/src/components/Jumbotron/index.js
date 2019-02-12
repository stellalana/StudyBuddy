import React from "react";
import './jumbotron.css';

const styles = {
  jumbo: {
    backgroundColor: 'white',
    height: 200, clear: "both", textAlign: "center"
  },
  heading: {

  }
};

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
