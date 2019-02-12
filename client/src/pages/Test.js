import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import QuestionCard from "../components/QuestionCard";
import { Provider, MyContext } from "../MyContext";
import { FormBtn } from "../components/Form";


class Test extends Component {
  constructor(props) {
    super(props);

  this.userAnswer = React.createRef();


  
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

checkAnswer = (userAnswer, correctAnswer) => {
   if (userAnswer === correctAnswer) {
     console.log("Correct!")
     console.log(this.state.allQuestions[0].question);
     var tempState = this.state;
     console.log(tempState.allQuestions[0].question);
     tempState.allQuestions[0].active = false;
     console.log(tempState.allQuestions);
     console.log(this.state.allQuestions);
     this.setState({ allQuestions : tempState.allQuestions });
   }
   else {
     console.log("Wrong");
     console.log(this.state.allQuestions[0].question);
   }
}


    

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
      
            <Jumbotron>
              <h1 class="jumboTitle">Study Buddy</h1>
            </Jumbotron>
            {this.shuffle(this.state.allQuestions).filter(i=>i.active !== false).slice(0, 1).map(i=> (
            <div className="questionCard" key={i._id+"div"}>

              <QuestionCard 
              key={i._id+"questionCard"}
              question={i.question}
              >
              </QuestionCard>
              
                <input key={i._id+"Input"} style={{borderRadius:"5%"}} placeholder="Answer Question" ref={this.userAnswer} />

                <FormBtn
                key={i._id+"Button"}
                onClick={()=>this.checkAnswer(this.userAnswer.current.value, i.answer)}
              >Answer
              </FormBtn>

            </div>

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