import React, { Component } from "react";


const MyContext = React.createContext();

class Provider extends Component {
  state = {
    currentUser: null
  };

  logIn = name => {
    this.setState({ currentUser: name });
  };

  logOut = () => this.setState({ currentUser: null });
  render() {
    return (
      <MyContext.Provider
        value={{
          currentUser: this.state.currentUser,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { Provider, MyContext };
