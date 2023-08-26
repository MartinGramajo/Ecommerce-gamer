const uriJuego = import.meta.env.VITE_API_JUEGO;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch("https://localhost:5173/usuarios");
    const listaUsuarios = await respuesta.json();
    const usuarioListado = usuarioListado.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioListado) {
      if (usuarioListado.password === usuario.password) {
        return usuarioListado;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {}
};

//////////////////////////////////////////

export const listarJuego = async () => {
  try {
    const respuesta = await fetch(uriJuego);
    const listaJuegos = await respuesta.json();
    return listaJuegos;
  } catch (error) {
    console.log(error);
  }
};

export const crearJuego = async (juego) => {
  try {
    const resp = await fetch(uriJuego, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(juego),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerJuego = async (id) => {
  try {
    const resp = await fetch(`${uriJuego}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarJuego = async (id, juegoEditado) => {
  try {
    const resp = await fetch(`${uriJuego}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(juegoEditado),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const borrarJuego = async (id) => {
  try {
    const respuesta = await fetch(`${uriJuego}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
