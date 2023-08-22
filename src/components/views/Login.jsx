import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = ({ setUsuarioActivo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (usuario) => {
    login(usuario).then((respuesta) => {
      console.log(respuesta);
      if (respuesta) {
        Swal.fire(
          "Bienvenido " + respuesta.nombreUsuario,
          "Ingresaste a Intendo",
          "success"
        );
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
        setUsuarioActivo(respuesta);
      } else
        Swal.fire("Ocurrio un error", "Email o contraseña incorrecto", "error");
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-">
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
          <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
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
