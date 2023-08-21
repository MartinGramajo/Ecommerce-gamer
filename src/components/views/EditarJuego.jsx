import { Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import mario from "../../assets/mario-constructor.png";
import marioConstructor from "../../assets/mario-constructor-ok.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { editarJuego, obtenerJuego } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarJuego = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerJuego(id)
      .then((resp) => {
        if (resp) {
          setValue("nombreJuego", resp.nombreJuego);
          setValue("precio", resp.precio);
          setValue("categoria", resp.categoria);
          setValue("imagen", resp.imagen);
          setValue("descripcion", resp.descripcion);
          setValue("descripcionCorta", resp.descripcionCorta);
          setValue("lanzamiento", resp.lanzamiento);
          setValue("numeroJugadores", resp.numeroJugadores);
          setValue("desarrollador", resp.desarrollador);
          setValue("clasificacion", resp.clasificacion);
          setValue("modosCompatibles", resp.modosCompatibles);
          setValue("idiomasCompatibles", resp.idiomasCompatibles);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data) => {
    editarJuego(id, data)
      .then((resp) => {
        if (resp.status === 200) {
          Swal.fire(
            "Juego Editado",
            "Se edito exitosamente su Juego",
            "success"
          );
        }
        navegacion("/administrador");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Hubo un Error",
          "error al intentar cargar el juego",
          `error`
        );
      });
  };

  return (
    <section className=" fondo-editar text-white">
      <div className="d-flex py-4">
        <Image className="mario" src={mario} alt="Super Mario constructor" />
        <h1 className="display-6 my-4 ms-4">Editar juego</h1>
      </div>
      <hr />
      <Form className="container py-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label className="h3">Nombre del Juego</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: The legend of Zelda"
            {...register("nombreJuego", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreJuego?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="h3">Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es un valor requerido",
              min: {
                value: 10000,
                message: "El precio como minimo debe ser de $10000",
              },
              max: {
                value: 100000,
                message:
                  "El precio del producto como maximo debe ser de $100000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="h3">Categoria*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej Plataformas Acción"
            {...register("categoria", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label className="h3">Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="h3">Descripción*</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Ingresar una descripción del juego"
            {...register("descripcion", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "Debe ingresar como maximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="h3">Descripción corta*</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Ingresar una descripción breve del juego"
            {...register("descripcionCorta", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 4,
                message: "Debe ingresar como minimo 4 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionCorta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="h3">Fecha de lanzamiento*</Form.Label>
          <Form.Control
            type="text"
            placeholder="ej 11 de enero de 2019"
            {...register("lanzamiento", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.lanzamiento?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="h3">Num de Jugadores*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: una sola consola 1-4"
            {...register("numeroJugadores", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 1,
                message: "Debe ingresar como minimo 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.numeroJugadores?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="h3">Clasificación*</Form.Label>
          <Form.Select
            {...register("clasificacion", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Todos">Todos</option>
            <option value="Todos +10">Todos +10</option>
            <option value="+16">+16</option>
            <option value="+18">+18</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.clasificacion?.message}
          </Form.Text>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label className="h3">Modos Compatibles*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Modo Televisor, modo semiportatil, Modo portátil"
              {...register("modosCompatibles", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "Debe ingresar como maximo 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.modosCompatibles?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label className="h3">Idiomas Compatibles*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Coreano, Español, Francés, Holandés, Inglés"
              {...register("idiomasCompatibles", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como minimo 2 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "Debe ingresar como maximo 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.idiomasCompatibles?.message}
            </Form.Text>
          </Form.Group>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="success" type="submit">
            <Image
              className="mario me-2"
              src={marioConstructor}
              alt="Super Mario constructor"
            />
            Guardar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default EditarJuego;
