import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fundadora from "./pages/Fundadora";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import MembrosAdm from "./pages/Administrador/Membros";
import EventosCriarAdm from "./pages/Administrador/Eventos/adicionar";
import EventoListarAdm from "./pages/Administrador/Eventos/listar";
import EventoUser from "./pages/Evento/listar";
import Perfil from "./pages/PerfilUsuario";
import MaisInfo from "./pages/Evento/MaisInformacoes";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundadora" element={<Fundadora />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/eventos" element={<EventoUser />} />
        <Route path="/administrador/membros" element={<MembrosAdm />} />
        <Route path="/administrador/eventos" element={<EventoListarAdm />} />
        <Route
          path="/administrador/eventos/criar"
          element={<EventosCriarAdm />}
        />
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/maisInfo" element={<MaisInfo/>}/>
      </Routes>

    </BrowserRouter>
  );
}
export default RoutesApp;
