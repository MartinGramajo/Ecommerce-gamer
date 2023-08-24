import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarJuego, listarJuego } from "../helpers/queries";

const ItemJuego = ({
  id,
  nombreJuego,
  precio,
  imagen,
  categoria,
  lanzamiento,
  setJuegos,
}) => {
  const borrarJuegoAdmin = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el juego?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //realizar la consulta a la api
        borrarJuego(id).then((respuesta) => {
          if (respuesta.status === 200) {
            //actualizar el state productos o la tabla
            listarJuego().then((respuesta) => {
              console.log(respuesta);
              setJuegos(respuesta);
            });

            Swal.fire(
              "Juego eliminado",
              "El juego fue correctamente borrado del catalogo",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operación mas tarde",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreJuego}</td>
      <td>$ {precio}</td>
      <td className="text-center">
        <Image className="imagen-juego-tabla" src={imagen} alt={nombreJuego} />
      </td>
      <td>{categoria}</td>
      <td>{lanzamiento}</td>
      <td>
        <div className="py-4">
          <Link
            className="btn btn-warning px-5"
            to={`/administrador/editar/${id}`}
          >
            Editar
          </Link>
        </div>
        <div className="py-4">
          <Button className="btn btn-danger px-5" onClick={borrarJuegoAdmin}>
            Borrar
          </Button>
        </div>
        <div className="py-4">
          <Link className="btn btn-info px-5" to={`/detalle/${id}`}>
            Detalles
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ItemJuego;
