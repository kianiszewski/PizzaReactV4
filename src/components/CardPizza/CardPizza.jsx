import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function formatPrice(price) {
  return new Intl.NumberFormat('es-CL').format(price);
}

function CardPizza({ img, name, price, ingredients }) {
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Header>Pizza {name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Ingredientes: </ListGroup.Item>
        <ListGroup.Item>{ingredients.join(', ')}</ListGroup.Item>
      </ListGroup>
      <Card.Text>Precio: ${formatPrice(price)}</Card.Text>
      <Card.Body>
        <Button variant="outline-dark" className="me-4">Ver Más</Button>
        <Button variant="dark">Añadir</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
