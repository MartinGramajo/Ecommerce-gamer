import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const MenuReact = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link}>logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" end to={"/"}>
              Inicio
            </NavLink>
            <NavLink className="nav-link" end to="/Nosotros">
              Acerca de nosotros
            </NavLink>
            <NavLink className="nav-link" end to="/Administrador">
              Administrador
            </NavLink>
            <NavLink className="nav-link" end to="/Login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuReact;
