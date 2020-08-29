import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import burger from './components/images/burger.jpg'
import pizza from './components/images/piz.jpg'
import biriyani from './components/images/bir.jpg'
function Demo(){

    return(
        <div>
            <Container>
<Row>
    <Col xs={12} sm={12} md={6} lg={4}>
<Card>
  <Card.Img variant="top" src={burger} />
  <Card.Body>
    <Card.Title>Burgers</Card.Title>
    <Card.Text>
    McDonald’s sells 75 or more burgers every second.
    </Card.Text>
  </Card.Body>
</Card></Col>
<Col xs={12} sm={12} md={6} lg={4}>
<Card>
  <Card.Img variant="top" src={biriyani} />
  <Card.Body>
    <Card.Title>Biriyani</Card.Title>
    <Card.Text>
    There are more than 20 types of biryani around the world. 
    </Card.Text>
  </Card.Body>
</Card></Col>
<Col xs={12} sm={12} md={12} lg={4}>
<Card>
  <Card.Img variant="top" src={pizza} />
  <Card.Body>
    <Card.Title>Pizza</Card.Title>
    <Card.Text>
    The most expensive pizza in the world costs $12,000.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
        </div>

    )
}
export default Demo