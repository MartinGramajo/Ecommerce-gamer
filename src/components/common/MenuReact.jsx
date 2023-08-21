import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";

const MenuReact = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarstyle"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link}>
          <Image className="logo-intendo" fluid src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link nav-items" end to={"/"}>
              Inicio
            </NavLink>
            <NavLink className="nav-link nav-items" end to="/Nosotros">
              Acerca de nosotros
            </NavLink>
            <NavLink className="nav-link nav-items" end to="/Administrador">
              Administrador
            </NavLink>
            <NavLink className="nav-link nav-items" end to="/Login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuReact;
