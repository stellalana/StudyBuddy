import React, { Component } from "react";
import { Provider } from "./MyContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetQuestions from "./pages/GetQuestions";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Provider>
            <Nav />
        </Provider>
          <Switch>
            <Route exact path="/" component={GetQuestions} />
            <Route exact path="/getQuestions" component={GetQuestions} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
