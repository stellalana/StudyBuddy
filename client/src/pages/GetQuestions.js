import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { QuestionList, QuestionListItem } from "../components/QuestionList";
import { Input, FormBtn } from "../components/Form";
import { Provider, MyContext } from "../MyContext";


class Questions extends Component {
  constructor(props) {
    super(props);
  


  this.state = {
    allQuestions: [],
    question: "",
    answer: ""
  };
}

  componentDidMount() {
    API.getQuestions().then(res => this.setState({ allQuestions : res.data }))
    .then(()=>console.log(this.state.allQuestions))}


  deleteQuestion = id => {
    API.deleteQuestion(id)
      .then(res =>API.getQuestions().then(res => this.setState({ allQuestions : res.data })))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { target: { name, value } } = event
    this.setState({ [name]: value, event: event })
    console.log(event.target.value);
  }

  ///////////////////////////save question////////////////////////
  handleQuestion=(currentId)=> {
   console.log(currentId);
    const sendIt = {
      question: this.state.question,
      answer: this.state.answer
    };
    var tempID = "5c5ecc4c2aac9312fcb3f439"
    API.saveQuestion(sendIt)
    //.then(res => console.log(res.data._id))
    //.then(res=>API.updateUserQuestion(tempID, {questions:res.data._id})) //FINISH TO UPDATE USER WITH ID FOR QUESTION
    .then(this.setState({ question:"", answer: ""}))
    .then(res =>API.getQuestions().then(res => this.setState({ allQuestions : res.data })))
    .catch(err => console.log(err));
  }

  ////////////////////////save user//////////////////////////////added prevent default
  saveUser=(e)=> {
    e.preventDefault();
    console.log("started................");
    const sendIt = {
      userName: "Roger",
      password: "1234",
      firstName: "Roger",
      lastName: "Roger",
      saved: true,
      createDate: new Date(Date.now())
    }

    API.saveUser(sendIt).then(res => console.log(res))
    .catch(err => console.log(err));
  }

 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
      
            <Jumbotron>
              <h1>Study Buddy</h1>
              <h3>Enter A Question!</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.question}
                onChange={this.handleInputChange}
                name="question"
                placeholder="Question (required)"
              />
              <Input
                value={this.state.answer}
                onChange={this.handleInputChange}
                name="answer"
                placeholder="Answer (required)"
              />
      
              <Provider>
              <MyContext.Consumer>
              {({ currentId }) => (
               <FormBtn
               disabled={!(this.state.question) || !(this.state.answer)}
               onClick={()=>this.handleQuestion(currentId)}
             >
               Submit
             </FormBtn>
              )}
            </MyContext.Consumer>
            </Provider>
              
    

            </form>
          </Col>
          <Col size="md-12 sm-12">
            {this.state.allQuestions.length ? (
              <QuestionList>
              {this.state.allQuestions.map(ques=> (
              
                <QuestionListItem
                  key = {ques._id}
                  id = {ques._id}
                  answer = {ques.answer}
                  question = {ques.question} 
                  deleteQuestion = {this.deleteQuestion}      
                  />
                
                )
                )}
            </QuestionList>
            ) : (
              <h3>No Questions Entered Yet!</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Questions;
