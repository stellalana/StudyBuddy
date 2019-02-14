import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";



function Nav() {
  return (
    <nav style={{backgroundColor:'white'}} className="navbar navbar-expand-lg">
      <LoginForm />
      <Link to="/getQuestions">Add Questions</Link><span style={{padding:'10px'}}>|</span>
      <Link to="/test">Take Quiz</Link>
      

    </nav>
  );
}

export default Nav;