import { Route, Routes } from "react-router-dom";

import Administrador from "../views/Administrador";
import CrearJuego from "../views/CrearJuego";
import EditarJuego from "../views/EditarJuego";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador />} />
      <Route exact path="/crear" element={<CrearJuego />} />
      <Route exact path="/editar/:id" element={<EditarJuego />} />
    </Routes>
  );
};

export default RutasProtegidas;
