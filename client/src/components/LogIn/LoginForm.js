import React, { Component } from "react";
import { MyContext } from "../MyContext";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = {};
  }

  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const { currentUser, logIn, logOut } = value;
          return currentUser ? (
            <React.Fragment>
              <h3>Logged in as: {currentUser}</h3>
              <button onClick={logOut}>Log Out</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form
                onSubmit={() => {
                  logIn(this.textInput.current.value);
                }}
              >
                <input placeholder="Name Please" ref={this.textInput} />
                <button
                  type="submit"
                  onClick={() => {
                    logIn(this.textInput.current.value);
                  }}
                >
                  Log In
                </button>
              </form>
            </React.Fragment>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default LoginForm;
