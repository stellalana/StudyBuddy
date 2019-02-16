import React, { Component } from "react";
import { MyContext } from "../../MyContext";
import "./style.css";


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.userInput = React.createRef();
    this.passwordInput = React.createRef();

    this.state = {};
  }


  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const { currentUser, logIn, logOut } = value;
          return currentUser ? (
            <span style={{paddingRight: "10px"}}>
              <span style={{padding: "0 10px", fontSize:"25px" }}> {currentUser}</span>
              <button className="btn-primary" onClick={logOut}>Log Out</button>
            </span>
          ) : (
            <div>
              <form style={{paddingRight: "10px"}}
              >
                <input className="usernameInput" style={{borderRadius:"5%"}} placeholder="Username" ref={this.userInput} />
                <input className="passwordInput" style={{borderRadius:"5%"}} placeholder="Password" ref={this.passwordInput} />
                <button
                   className="btn-primary" 
                  onClick={() => {
                    logIn(this.userInput.current.value, this.passwordInput.current.value);
                  }}
                >
                  Log In
                </button>
              </form>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default LoginForm;
