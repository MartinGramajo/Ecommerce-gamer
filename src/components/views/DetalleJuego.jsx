import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuego } from "../../helpers/queries";
import { Image } from "react-bootstrap";
import clasificacionModos from "../../assets/clasificacion-modosCompatibles.png";
import clasificacionMobile from "../../assets/clasificacion-mobile.png";
import modosMobile from "../../assets/modos-compatiblesMobile.png";
import moneda from "../../assets/moneda.png";
import cupones from "../../assets/cupones-slider.png";
import cuponesMobile from "../../assets/cupones-mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDownload,
  faGamepad,
  faGear,
  faGlobe,
  faPenToSquare,
  faPeopleGroup,
  faTicket,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const DetalleJuego = () => {
  const [datosJuego, setDatosJuego] = useState({});
  const {
    nombreJuego,
    precio,
    categoria,
    imagen,
    descripcion,
    lanzamiento,
    numeroJugadores,
    desarrollador,
    clasificacion,
    modosCompatibles,
    idiomasCompatibles,
  } = datosJuego;

  const { id } = useParams();
  useEffect(() => {
    obtenerJuego(id)
      .then((resp) => {
        setDatosJuego(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="container-fluid fondo-detalle text-white">
      <article className="row py-4 bg-white ">
        <div className="col-12 col-lg-6 text-center">
          <Image fluid src={imagen} alt={nombreJuego} />
        </div>
        <div className="col-12 col-lg-6 text-black d-flex justify-content-start">
          <div>
            <h3>{nombreJuego}</h3>
            <h6>{desarrollador}</h6>
            <div className="border-item text-black my-4">
              <div className="py-2">
                <h6>Version Digital</h6>
                <h6>{nombreJuego}</h6>
                <h4>$ {precio}</h4>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <Image
                  className="moneda"
                  fluid
                  src={moneda}
                  alt={nombreJuego}
                />
              </div>
              <div className="my-3 ms-3">
                <h6 className="text-black-50">
                  Elegible para hasta <b>2000 </b> puntos de oro
                </h6>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <a
                className="btn btn-descarga text-decoration-none text-white"
                href="https://accounts.nintendo.com/login?post_login_redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fredirect_uri%3Dhttps%253A%252F%252Fec.nintendo.com%252Foauth2%252Fcallback%26scope%3Dopenid%2Boffline%2Buser%2Buser.links.nintendoNetwork.id%26state%3Ded03245b-138e-4c9e-aec3-76748593b818%26client_id%3De56201e414c97a10%26response_type%3Dcode%2Bid_token&post_federation_reauthenticate=1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="mx-2" icon={faDownload} />
                Descarga Directa
              </a>
            </div>
            <div>
              <a
                className="text-decoration-none text-danger"
                href="https://accounts.nintendo.com/login?post_login_redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fredirect_uri%3Dhttps%253A%252F%252Fec.nintendo.com%252Foauth2%252Fcallback%26scope%3Dopenid%2Boffline%2Buser%2Buser.links.nintendoNetwork.id%26state%3Ded03245b-138e-4c9e-aec3-76748593b818%26client_id%3De56201e414c97a10%26response_type%3Dcode%2Bid_token&post_federation_reauthenticate=1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="mx-2" icon={faTicket} />
                Canjear un cupón para juegos de Nintendo Switch
              </a>
              <h6 className="py-5">
                Enviaremos este artículo automáticamente a tu consola después de
                la compra o el canje del cupón para juegos de Nintendo Switch.
                <a
                  className="text-decoration-none text-danger"
                  href="https://www.nintendo.com/es-ar/store/products/nintendo-switch-game-vouchers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="mx-2" icon={faTicket} />
                  Más información sobre los cupones
                </a>
              </h6>
            </div>
          </div>
        </div>
      </article>
      <div className="px-5 py-5 ">
        <h1 className="py-5">{nombreJuego}</h1>
        <h4>{descripcion}</h4>
      </div>
      <article className="text-center py-5">
        <div className=" d-md-block d-none">
          <Image
            fluid
            src={cupones}
            alt="clasificación-modos compatibles de juego"
          />
        </div>
        <div className="d-block d-md-none">
          <Image fluid src={cuponesMobile} alt="clasificación" />
        </div>
      </article>
      <article className="text-center">
        <div className=" d-md-block d-none">
          <Image
            fluid
            src={clasificacionModos}
            alt="clasificación-modos compatibles de juego"
          />
        </div>
        <div className="d-block d-md-none">
          <Image fluid src={clasificacionMobile} alt="clasificación" />
          <Image fluid src={modosMobile} alt="modos compatibles de juego" />
        </div>
      </article>
      <article className="py-5 text-center">
        <div className="row bg-white py-2  border-item text-black">
          <div className="col-12 col-md-6">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span> Fecha de lanzamiento</span>
          </div>
          <div className="col-12 col-md-6 ">{lanzamiento}</div>
        </div>

        <div className="row bg-white py-2  border-item  text-black">
          <div className="col-12 col-md-6">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span> Numero de Jugadores</span>
          </div>
          <div className="col-12 col-md-6 ">{numeroJugadores}</div>
        </div>
        <div className="row bg-white py-2  border-item text-black">
          <div className="col-12 col-md-6">
            <FontAwesomeIcon icon={faGamepad} />
            <span> Numero de Jugadores</span>
          </div>
          <div className="col-12 col-md-6 ">{categoria}</div>
        </div>
        <div className="row bg-white py-2 border-item  text-black">
          <div className="col-12 col-md-6">
            <FontAwesomeIcon icon={faGear} />
            <span> Clasificación</span>
          </div>
          <div className="col-12 col-md-6 ">{clasificacion}</div>
        </div>

        <div className="row bg-white py-2  border-item  text-black">
          <div className="col-12 col-md-6">
            <FontAwesomeIcon icon={faPenToSquare} />
            <span> Editor</span>
          </div>
          <div className="col-12 col-md-6 ">{desarrollador}</div>
        </div>
        <div className="row bg-white py-2  border-item  text-black">
          <div className="col-12 col-md-6">
            <FontAwesomeIcon icon={faTv} />
            <span> Modos Compatibles</span>
          </div>
          <div className="col-12 col-md-6 ">{modosCompatibles}</div>
        </div>
        <div className="row bg-white py-2  border-item  text-black">
          <div className="col-12 col-md-6">
            <FontAwesomeIcon icon={faGlobe} />
            <span> Idiomas Compatibles</span>
          </div>
          <div className="col-12 col-md-6 ">{idiomasCompatibles}</div>
        </div>
      </article>
    </section>
  );
};

export default DetalleJuego;
