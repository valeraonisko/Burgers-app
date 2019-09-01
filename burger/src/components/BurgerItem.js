import React from 'react';
import { Col, Card, CardTitle, CardImg, CardBody } from 'reactstrap';

function BurgerItem (props) {
  const { burgerSelected } = props;
  const imgSrc = `/burgers-img/${burgerSelected.img}`;
  return (
    <Col className="m-4">
    <Card>
      
      <CardBody>
        <CardTitle>{burgerSelected.title}</CardTitle>
        <CardImg src={imgSrc}/>

      </CardBody>

    </Card>
    </Col>
  );
}

export default BurgerItem;
