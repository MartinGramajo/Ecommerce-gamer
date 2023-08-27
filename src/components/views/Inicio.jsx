import bannerSm from "../../assets/Pikmin4responsive.png";
import bannerLg from "../../assets/Pikmin4.png";
import { useEffect, useState } from "react";
import { listarJuego } from "../../helpers/queries";
import Swal from "sweetalert2";
import FiltroBusqueda from "../FiltroBusqueda";
const Inicio = () => {
  const [juegos, setJuegos] = useState([]);

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
    <>
      <section className="w-100 ">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid d-sm-block d-lg-none"
            src={bannerSm}
            alt="Banner nintendo"
          />
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid d-none d-lg-block"
            src={bannerLg}
            alt="Banner nintendo"
          />
        </div>
      </section>
      <section>
        <FiltroBusqueda juegos={juegos}></FiltroBusqueda>
      </section>
    </>
  );
};

export default Inicio;
