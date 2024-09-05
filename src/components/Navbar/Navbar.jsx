import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styles from './Navbar.module.css'; 
import Home from '../../pages/Home/Home';
import Cart from '../../pages/Cart/Cart';
import { Link, Route, Routes } from 'react-router-dom';
import Register from '../../pages/Register/Register';
import Login from '../../pages/LoginPage/LoginPage';
import Pizza from '../../pages/Pizza/Pizza';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function NavbarPizza() {
  const total = "25.000";
  const token = false; // Estado hardcodeado, cambiar a true para cambiar visibilidad de botones

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="ms-0">
            Pizzeria Mamma Mia
          </Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="outline-light" as={Link} to="/">🍕 Home</Button>{' '}
            <div className={token ? styles.visible : styles.hidden}>
              <Button variant="outline-light" as={Link} to="/profile">🔓 Profile</Button>{' '}
              <Button variant="outline-light">🔒 Logout</Button>{' '}
            </div>
            <div className={!token ? styles.visible : styles.hidden}>
              <Button variant="outline-light" as={Link} to="/login">🔐 Login</Button>{' '}
              <Button variant="outline-light" as={Link} to="/register">🔐 Register</Button>{' '}
            </div>
          </Nav>
          <Nav>
            <Button variant="outline-light" as={Link} to="/cart">🛒 Total: ${total}</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default NavbarPizza;
