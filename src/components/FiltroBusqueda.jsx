import { useEffect, useState } from "react";
//import { Search } from "react-bootstrap-icons";
import ContenedorJuegos from "./ContenedorJuegos";

export default function FiltroBusqueda({ juegos }) {
  const [juegoBuscado, setJuegoBuscado] = useState("");
  const [copiaJuegos, setCopiaJuegos] = useState([]);
  useEffect(() => {
    setCopiaJuegos(juegos);
  }, [juegos]);

  const filtroBusqueda = (e) => {
    e.preventDefault();
    const valorBuscado = e.target.value;
    setJuegoBuscado(valorBuscado);

    if (valorBuscado === "") {
      setCopiaJuegos(juegos);
    } else {
      const juegosBuscados = copiaJuegos.filter((juego) =>
        juego.nombreJuego.toLowerCase().includes(juegoBuscado.toLowerCase())
      );
      if (juegosBuscados.length > 0) {
        setCopiaJuegos(juegosBuscados);
      }
    }
  };

  return (
    <section className="container">
      <form className="d-flex justify-content-between my-4" id="input-busqueda">
        {/* <div><Search></Search></div> */}
        <input
          className="w-100"
          type="text"
          placeholder="¿Que juego estas buscando?"
          value={juegoBuscado}
          onInput={filtroBusqueda}
        ></input>
      </form>
      <ContenedorJuegos copiaJuegos={copiaJuegos} />
    </section>
  );
}
