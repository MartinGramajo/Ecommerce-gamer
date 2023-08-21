import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemJuego = ({
  id,
  nombreJuego,
  precio,
  imagen,
  categoria,
  lanzamiento,
}) => {
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
          <Link className="btn btn-danger px-5" to="/administrador/editar">
            Borrar
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ItemJuego;
