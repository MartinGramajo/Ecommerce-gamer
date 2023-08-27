import { Container, Button, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../../helpers/queries";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUsuarioActivo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario);
    login(usuario)
      .then((respuesta) => {
        console.log(respuesta);
        if (respuesta.role === "administrador") {
          Swal.fire(
            "Bienvenido " + respuesta.nombreUsuario,
            "Ingresaste a Intendo",
            "success"
          );
          sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
          setUsuarioActivo(respuesta);
          navegacion("/administrador");
        } else {
          Swal.fire(
            "Bienvenido " + respuesta.nombreUsuario,
            "Ingresaste a Intendo",
            "success"
          );
          sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
          setUsuarioActivo(respuesta);
          navegacion("/");
        }
      })
      .catch((error) => {
        Swal.fire("Ocurrió un error", "Email o contraseña incorrecto", "error");
      });
  };

  return (
    <Container className="mainSection bgLogin">
      <Card className="my-5 ">
        <Card.Header as="h4">Cuenta Intendo</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="text">
                Ingrese su correo electronico
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="ejemplo@gmail.com"
                {...register("email", {
                  required: "El campo email es obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe cumplir con un formato valido como el siguiente ejemplo@gmail.com",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Ingrese su contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "Debe ingresar una contraseña",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un numero, una minuscula y una mayuscula",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Link to={"*"}>
              <Button className="mb-2" variant="link">
                Has olvidado la contraseña?
              </Button>
            </Link>
            <div></div>
            <Button variant="secondary" type="submit">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
