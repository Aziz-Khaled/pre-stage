import React from 'react'
import { Button, Card } from 'react-bootstrap';
import '../App.css';

const home = (coffee) => {
  
  
  return (
    <div className="container">

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {coffee.name}</Card.Title>
        <Card.Text>
          {coffee.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>    </div>
  )
}

export default home