import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import FriendCard from "../components/FriendCard";
import { Input, FormBtn } from "../components/Form";
import { Provider, MyContext } from "../MyContext";


class Test extends Component {
  constructor(props) {
    super(props);
  


  this.state = {
    allQuestions: [],
    shuffledQuestions: [],
    question: "",
    answer: ""
  };
}

componentDidMount() {
    API.getQuestions().then(res => this.setState({ allQuestions : res.data }))
    .then(()=>console.log(this.state.allQuestions))
}

shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
     return a
    }

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
      
            <Jumbotron>
              <h1 class="jumboTitle">Study Buddy</h1>
            </Jumbotron>
            {this.shuffle(this.state.allQuestions).slice(0, 1).filter(i=>i.active=true).map(i=> (
            <FriendCard 
             key={i._id}
             name={i.question}
             shuffle={this.shuffle}
            />
            ))}
              <Provider>
              <MyContext.Consumer>
              {({ currentId }) => (
              
              <div>{currentId}</div>)}
            </MyContext.Consumer>
            </Provider>
            
          </Col>
          <Col size="md-12 sm-12">
         
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Test;