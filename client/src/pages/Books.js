import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/Booklist";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    description: ""
  };
  componentDidMount() {
    API.getQuestions().then(res => console.log(res));
  }


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
  
    this.setState({
      description: event.target.value
    });
    console.log(this.state.description);
  };

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
              <img src="https://www.knowerstech.com/wp-content/uploads/2017/01/google-book.png"></img>
            </Jumbotron>
            <form>
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            {this.state.books.length ? (
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
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
