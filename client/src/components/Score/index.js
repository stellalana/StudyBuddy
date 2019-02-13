import React from "react";
import "./style.css";

function Score(props) {
  return (
    <nav className="navbar">
      <div id="score">Your Score: {props.score}</div>
      <div id="logo"><img alt="Fortnite Logo" src={props.logo}></img>
      </div>
      <div id="hScore">High Score: {props.highscore}</div>
  <p onClick={() => props.restartGame()} id="restart">Restart Game</p>
</nav>
  );
}

export default Score;