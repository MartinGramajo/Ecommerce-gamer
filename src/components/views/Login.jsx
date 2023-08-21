import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-">
            Ingrese su correo electronico
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@gmail.com"
          ></Form.Control>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Ingrese su contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña"></Form.Control>
          <Form.Group
            className="mb-1"
            controlId="formBasicCheckbox"
          ></Form.Group>
        </Form.Group>
        <Button className="mb-2" variant="link">
          Has olvidado la contraseña?
        </Button>
        <div></div>
        <Button variant="secondary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
