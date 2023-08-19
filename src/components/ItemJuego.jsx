// import { Link } from "react-router-dom";

import { Button, Image } from "react-bootstrap";
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
        <Image className="w-50" src={imagen} alt={nombreJuego} />
      </td>
      <td>{categoria}</td>
      <td>{lanzamiento}</td>
      <td>
        <Link className="btn btn-warning" to="/administrador/editar">
          Editar
        </Link>
        <Button className="btn btn-danger">Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemJuego;
