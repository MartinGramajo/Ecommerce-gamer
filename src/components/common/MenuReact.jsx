import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";

const MenuReact = ({ usuarioActivo, setUsuarioActivo }) => {
  const navegacion = useNavigate();

  const logout = () => {
    Swal.fire({
      title: "SEGURO QUE QUIERES CERRAR SESIÓN?",
      showDenyButton: true,
      confirmButtonText: "si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sesión cerrada!", "", "success");
        setUsuarioActivo("");
        sessionStorage.removeItem("usuarioLogueado");
        navegacion("/");
      } else if (result.isDenied) {
        Swal.fire("Sesión activa!", "", "info");
      }
    });
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarstyle"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image className="logo-intendo" fluid src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            <NavLink className="nav-link nav-items" end to={"/"}>
              Inicio
            </NavLink>
            <NavLink className="nav-link nav-items" end to="/Nosotros">
              Acerca de nosotros
            </NavLink>
            {!usuarioActivo.email && (
              <NavLink className="nav-link nav-items" end to="/Login">
                Login
              </NavLink>
            )}
            {usuarioActivo?.role === "administrador" && (
              <>
                <NavLink className="nav-link" end to="/administrador">
                  Administrador
                </NavLink>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
            {usuarioActivo.role === "usuario" && (
              <>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuReact;
