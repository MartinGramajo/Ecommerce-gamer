const uriJuego = import.meta.env.VITE_API_JUEGO


export const listarJuego = async () => {
  try {
    const respuesta = await fetch(uriJuego)
    console.log("file: queries.js:7 ~ listarJuego ~ respuesta :", respuesta)
    const listaJuegos = await respuesta.json()
    console.log("file: queries.js:9 ~ listarJuego ~ listaJuegos:", listaJuegos)
    return listaJuegos
  } catch (error) {
    console.log(error);
  }
}

export const crearJuego = async (juego) => {
  try {
    const resp = await fetch(uriJuego, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(juego)
    })
    return resp
  } catch (error) {
    console.log(error);
  }

}