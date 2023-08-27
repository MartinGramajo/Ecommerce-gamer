import { Image, Spinner, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { listarJuego } from "../../helpers/queries";
import Swal from "sweetalert2";
import ItemJuego from "../ItemJuego";
import { Link } from "react-router-dom";
import marioSaltando from "../../assets/mario-saltando.png";

const Administrador = () => {
  const [juegos, setJuegos] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    setMostrarSpinner(true);
    listarJuego().then((respuestaJuegos) => {
      if (respuestaJuegos) {
        setJuegos(respuestaJuegos);
      } else {
        Swal.fire("Ocurrio un error", "Intente de nuevo", "error");
      }
      setMostrarSpinner(false);
    });
  }, []);

  return (
    <section className="container-fluid fondo-administrar">
      <div className="d-flex justify-content-between align-items-center ">
        <h1 className="display-4 text-center text-white">Juegos disponibles</h1>
        <Link className="btn btn-success mt-3" to="/administrador/crear">
          <Image
            className="honguito-agregar"
            src={marioSaltando}
            alt="Mario bros"
          />
          Agregar
        </Link>
      </div>
      <hr />
      {mostrarSpinner ? (
        <div className="my-5 d-flex justify-content-center">
          <Spinner className="fs-1" animation="border" variant="dark" />
        </div>
      ) : (
        <>
          <Table responsive striped bordered hover variant="dark">
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
                <ItemJuego
                  {...juego}
                  key={juego.id}
                  setJuegos={setJuegos}
                ></ItemJuego>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </section>
  );
};

export default Administrador;
