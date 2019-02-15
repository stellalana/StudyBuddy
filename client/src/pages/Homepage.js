import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { MyContext } from "../MyContext";
import Nav from "../components/Nav";


class Homepage extends Component {
  constructor(props) {
    super(props);
  


  this.state = {
  
  };
}

render() {
    return (
    
      <Container fluid>
      <Nav />
        <Row>
          <Col size="md-12">
      
            <Jumbotron>
            <MyContext.Consumer>
              {({ currentUser }) => (
                <h1 className="App-title">
                  {currentUser ? `Welcome ${currentUser}` : "Welcome to StudyBuddy, please Log In!"}
                </h1>
                
              )}
            </MyContext.Consumer>
            </Jumbotron>
          </Col>
        </Row>

        </Container>
    )
  }
}

export default Homepage;