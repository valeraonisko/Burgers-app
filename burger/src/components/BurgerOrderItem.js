import React from 'react';
import { Row, Col, CardImg } from 'reactstrap';

export default function BurgerOrderItem (props) {
  const { no, burger, options } = props;
  const imgSrc = `/burgers-img/${burger.img}`;
  const optionItems = options.map(option => (<div>{option.title}: {option.qt}<br/></div>));
  return (
  <Row>
    <Col>{no}</Col>
    <Col>{burger.title}</Col>
    <Col><CardImg src={imgSrc}/></Col>
    <Col>options<br/>{optionItems}</Col>
  </Row>
  );
}
