import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuReact from "./components/common/MenuReact";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import Administrador from "./components/views/Administrador";
import Login from "./components/views/Login";
import Nosotros from "./components/views/Nosotros";
import CrearJuego from "./components/views/CrearJuego";
import EditarJuego from "./components/views/EditarJuego";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuReact />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/detalle" element={<DetalleProducto />} />
          <Route exact path="/administrador" element={<Administrador />} />
          <Route exact path="/administrador/crear" element={<CrearJuego />} />
          <Route exact path="/administrador/editar" element={<EditarJuego />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
