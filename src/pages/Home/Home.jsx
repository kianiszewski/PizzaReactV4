/* import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { pizzas } from "../../assets/pizza"; //importandose desde un archivo js


const Home = () => {
  return (
    <Container>
      <Header title="Pizzeria Mamma Mia" subtitle="Tenemos las mejores pizzas que podrás encontrar" />
      <Row>
        {pizzas.map((pizza) => (
          <Col md={4} className="mb-4" key={pizza.id}>
            <CardPizza
              name={pizza.name} //recibiendo props desde el archivo js pizzas
              price={pizza.price}//recibiendo props desde el archivo js pizzas
              ingredients={pizza.ingredients.map(ingredient => `${ingredient}`)}//recibiendo props desde el archivo js pizzas, tipo array
              img={pizza.img} //recibiendo props desde el archivo js pizzas
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home; */

import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import CardPizza from "../../components/CardPizza/CardPizza";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas') /* Aca llamamos al API, ya no lo importamos como el js */
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Se chisporroteo la pizza:', error)); },[]);

  return (
    <Container>
      <Header title="Pizzeria Mamma Mia" subtitle="Tenemos las mejores pizzas que podrás encontrar" />
      <Row>
        {pizzas.map((pizza) => (
          <Col md={4} className="mb-4" key={pizza.id}>
            <CardPizza
              name={pizza.name} 
              price={pizza.price}
              ingredients={pizza.ingredients.map(ingredient => `${ingredient}`)}
              img={pizza.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
