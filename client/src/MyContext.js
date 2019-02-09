import React, { Component } from "react";
import API from "./utils/API";

const MyContext = React.createContext();

class Provider extends Component {
  state = {
    currentUser: null,
    password: null,
    userNames: [],
    passwords: []
  };

  componentDidMount() {
    this.userInfo();
  }

  userInfo = () => {
    var allNames = [];
    var allPasswords = [];
    API.getUsers()
    .then((res) => 
    {for (var i = 0; i < res.data.length; i++) 
      //{console.log(res.data[i].Username)}})};
      {
        allNames.push(res.data[i].userName);
        allPasswords.push(res.data[i].password);
      }})
      .then(this.setState({ userNames:allNames, passwords: allPasswords}))
      .then(()=> console.log(this.state))
      .catch(err => console.log(err));
    };

  logIn = (name, password) => {
    
    var where = this.state.userNames.indexOf(name);
    if (where > -1 && this.state.passwords[where] === password) {
      console.log(this.state.userNames.indexOf(name));
      console.log("HI");
      this.setState({ currentUser: name, password: password });
    }
    else {
      console.log("invalid password");
    }
  };

  logOut = () => this.setState({ currentUser: null, password: null });
  render() {
    return (
      <MyContext.Provider
        value={{
          currentUser: this.state.currentUser,
          password: this.state.password,
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
