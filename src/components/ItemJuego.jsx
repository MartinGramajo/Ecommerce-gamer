// import { Link } from "react-router-dom";

import { Button, Image } from "react-bootstrap";

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
        <Button className="btn btn-warning">Editar</Button>
        <Button className="btn btn-danger">Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemJuego;
