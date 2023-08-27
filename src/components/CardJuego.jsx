import { Link } from "react-router-dom";

export default function CardJuego({ imagen, nombreJuego, id }) {
  return (
    <section className="col home-card-juego">
      <Link to={"/detalle/" + id} className="text-decoration-none">
        <div className="card p-0 mb-2 h-100">
          <img src={imagen} className="w-100" alt={nombreJuego} />
          <div className="card-body">
            <h5 className="card-title">{nombreJuego}</h5>
            <div className="card-juegos-nintendo">
              <span>Nintendo Switch</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
