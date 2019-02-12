import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import './nav.css';



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <LoginForm />
      <Link to="/getQuestions">Add Questions</Link><span style={{padding:'10px'}}>|</span>
      <Link to="/test">Take Quiz</Link>
      

    </nav>
  );
}

export default Nav;