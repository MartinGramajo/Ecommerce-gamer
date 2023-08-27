import { Route, Routes } from "react-router-dom";

import Administrador from "../views/Administrador";
import CrearJuego from "../views/CrearJuego";
import EditarJuego from "../views/EditarJuego";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador />} />
      <Route exact path="/administrador/crear" element={<CrearJuego />} />
      <Route exact path="/administrador/editar/:id" element={<EditarJuego />} />
    </Routes>
  );
};

export default RutasProtegidas;
