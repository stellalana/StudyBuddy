import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      <h1>{props.name}</h1> 
      </div>
      <div className="content">
      <input className="answer"></input><button className="btn btn-success" >Answer</button>
      </div>
    </div>
  );
}

export default FriendCard;
