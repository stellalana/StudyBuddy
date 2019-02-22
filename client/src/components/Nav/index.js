import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./style.css";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg d-flex flex-row-reverse">
      <LoginForm />
      <div className="mr-auto p-2">
      <Link to="/">Home</Link><span style={{padding:'10px'}}>|</span>
      <Link to="/getQuestions">Add Questions</Link><span style={{padding:'10px'}}>|</span>
      <Link to="/test">Start Quiz</Link>
      </div>

    </nav>
  );
}

export default Nav;