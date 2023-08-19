import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { listarJuego } from "../../helpers/queries";
import Swal from "sweetalert2";
import ItemJuego from "../ItemJuego";

const Administrador = () => {
  const [juegos, setJuegos] = useState([]);
  console.log("file: Administrador.jsx:9 ~ Administrador ~ juegos:", juegos);

  useEffect(() => {
    listarJuego().then((respuestaJuegos) => {
      if (respuestaJuegos) {
        setJuegos(respuestaJuegos);
      } else {
        Swal.fire("Ocurrio un error", "Intente de nuevo", "error");
      }
    });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Juegos disponibles</h1>
        <Button className="btn btn-primary">Agregar</Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Lanzamiento</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {juegos.map((juego) => (
            <ItemJuego {...juego} key={juego.id}></ItemJuego>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
