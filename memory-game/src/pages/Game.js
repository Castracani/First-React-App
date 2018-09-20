import React from 'react';
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";

const Game = () => (
  <Container>
    <Row>
      <Col size="md-2 offset-md-1">
        <Row>
          <Col size="md-12">
            <h1>Directions</h1>
            <p>Click on one of the birds to increase your score. But only click once, or else your score will reset! You win by clicking all 12 images in a row only ONE time. Clicking the same image twice will reset the game. Good luck!</p>
          </Col>
          <Col size="md-12">Placeholder text for score</Col>
        </Row>
      </Col>

      <Col size="md-9">

      </Col>
    </Row>
  </Container>
);

export default Game;