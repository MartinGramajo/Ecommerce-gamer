import CardJuego from "./CardJuego";

export default function ContenedorJuegos({copiaJuegos}) {
  return (
    <section>
      <article className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 d-flex flex-wrap justify-content-center justify-content-md-between mt-3">
          {copiaJuegos.map((juego) => (
            <CardJuego {...juego} key={juego.id}></CardJuego>
          ))}
        </div>
      </article>
    </section>
  );
}
