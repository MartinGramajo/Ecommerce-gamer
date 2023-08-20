import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuReact from "./components/common/MenuReact";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import Administrador from "./components/views/Administrador";
import Login from "./components/views/Login";
import Nosotros from "./components/views/Nosotros";
import CrearJuego from "./components/views/CrearJuego";
import EditarJuego from "./components/views/EditarJuego";
import Error404 from "./components/views/Error404";
import Footer from "./components/common/Footer";

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
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
