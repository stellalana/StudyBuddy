import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/Booklist";
import { Input, FormBtn } from "../components/Form";




class Books extends Component {
  state = {
    allQuestions: [],
    question: "",
    answer: "",
  };



  //search google api
  searchGoogle = (query) => {
    API.search(query).then(res => this.setState({ books: res.data.items, description: "" }))
    .then(()=>console.log(this.state.books)).catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { target: { name, value } } = event
    this.setState({ [name]: value, event: event })
    console.log(event.target.value);
  }

  handleDelete=(id)=> {
    console.log(id);
    const books = this.state.books.filter(book => book.id !== id);
    this.setState({ books });
  }
  handleSave=(id)=> {
    console.log(id);
    const saveIt = this.state.books.filter(book=> book.id === id);
    const sendIt = {
      title: saveIt[0].volumeInfo.title,
      authors: saveIt[0].volumeInfo.authors,
      description: saveIt[0].volumeInfo.description,
      image: saveIt[0].volumeInfo.imageLinks.thumbnail,
      link: saveIt[0].volumeInfo.previewLink
    };

    API.saveBook(sendIt).then(res => this.handleDelete(id))
    .catch(err => console.log(err));
  }

  ///////////////////////////save question////////////////////////
  handleQuestion=()=> {
    console.log("started");
    const sendIt = {
      question: this.state.question,
      answer: this.state.answer,
    };

    API.saveQuestion(sendIt).then(res => console.log(res))
    .catch(err => console.log(err));
  }

  ////////////////////////save user//////////////////////////////
  saveUser=()=> {
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.description) {
      this.searchGoogle(this.state.description);
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
                onClick={this.handleQuestion}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            {this.state.allQuestions.length ? (
              <BookList>
              {this.state.books.map(book=> (
      
                <BookListItem
                  key = {book.id}
                  id = {book.id}
                  title = {book.volumeInfo.title}
                  href = {book.volumeInfo.infoLink}
                  desc = {book.volumeInfo.description}
                  authors = {book.volumeInfo.authors}
                  thumb = {book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://placehold.it/300x300"} 
                  handleDelete = {this.handleDelete} 
                  handleSave = {this.handleSave}     
                  />
                )
                
                )}

            </BookList>
            ) : (
              <h3>No Questions Entered Yet!</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
