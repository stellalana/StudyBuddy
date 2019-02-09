import React from "react";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../DeleteBtn";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function QuestionList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function QuestionListItem({
  id,
  question,
  answer,
  deleteQuestion
}) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="sm-12">
            <p>Question: {question}</p>
            <p>Answer: {answer}</p>
          </Col>
        </Row>
        <DeleteBtn onClick={()=>deleteQuestion(id)} id={id} />
      </Container>
    </li>
  );
}
