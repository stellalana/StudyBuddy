import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { MyContext } from "../MyContext";
import Nav from "../components/Nav";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="jumboTitle">Study Buddy</h1>
              <h3 className="jumboSlogan">The Best Way To Learn!</h3>
            </Jumbotron>
            <span>
              <p className="sbDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;
