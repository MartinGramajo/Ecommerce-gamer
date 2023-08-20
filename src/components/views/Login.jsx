import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-">Ingrese correo electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@gmail.com"
          ></Form.Control>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ingrese contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña"></Form.Control>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mantener conectado"></Form.Check>
          </Form.Group>
        </Form.Group>
        <Button variant="secondary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
