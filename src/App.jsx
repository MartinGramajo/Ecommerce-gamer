import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuReact from "./components/common/MenuReact";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Login from "./components/views/Login";
import Nosotros from "./components/views/Nosotros";
import CrearJuego from "./components/views/CrearJuego";
import EditarJuego from "./components/views/EditarJuego";
import Error404 from "./components/views/Error404";
import Footer from "./components/common/Footer";
import DetalleJuego from "./components/views/DetalleJuego";
import { useState } from "react";

function App() {
  const usuarioEnLinea =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <BrowserRouter>
        <MenuReact
          usuarioActivo={usuarioActivo}
          setUsuarioActivo={setUsuarioActivo}
        />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/detalle/:id" element={<DetalleJuego />} />
          <Route exact path="/administrador" element={<Administrador />} />
          <Route exact path="/administrador/crear" element={<CrearJuego />} />
          <Route
            exact
            path="/administrador/editar/:id"
            element={<EditarJuego />}
          />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route
            exact
            path="/login"
            element={<Login setUsuarioActivo={setUsuarioActivo} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
