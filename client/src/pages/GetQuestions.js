import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { QuestionList, QuestionListItem } from "../components/QuestionList";
import { Input, FormBtn } from "../components/Form";


class GetQuestions extends Component {
  state = {
    allQuestions: [],
    question: "",
    answer: "",
  };

  componentDidMount() {
    API.getUsers().then(res => console.log(res));
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getQuestions()
      .then(res =>
        this.setState({ allQuestions: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteQuestion = id => {
    API.deleteQuestion(id)
      .then(() => this.loadQuestions())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { target: { name, value } } = event
    this.setState({ [name]: value, event: event })
    console.log(event.target.value);
  }

  //Removes deleted questions from state. Do we need this?
  handleDelete = id => {
    console.log(id);
    const questions = this.state.questions.filter(question => question.id !== id);
    this.setState({ allQuestions: questions });
  }
  
  handleSave = () => {
    const newQuestion = {
      question: this.state.question,
      answer: this.state.answer
    };
    console.log(newQuestion);
    API.saveQuestion(newQuestion)
    .then(() => this.loadQuestions())
    .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.question && this.state.answer) {
      this.handleSave();
    }
  };

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
              <FormBtn
                disabled={!(this.state.question) || !(this.state.answer)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            {this.state.allQuestions.length ? (
              <QuestionList>
              {this.state.allQuestions.map(question=> (
      
                <QuestionListItem
                  key = {question._id}
                  id = {question._id}
                  question = {question.question}
                  answer = {question.answer}
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

export default GetQuestions;
