import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeAdm from "./pages/Administrador/HomeAdm";
import FormularioAdm from "./pages/Administrador/FormularioAdm";
import Evento from "./pages/Administrador/Eventos/listar";
import AdicionarEvento from "./pages/Administrador/Eventos/adicionar";
import EventosArquivado from "./pages/Administrador/Eventos/listar/EventosArquivado";

const AdmRouter = () => {
  return (
    <Routes>
      <Route path="" element={<HomeAdm />} />
      <Route path="/formulario" element={<FormularioAdm />} />
      <Route path="/eventos" element={<Evento />} />
      <Route path="/eventos/adicionar" element={<AdicionarEvento />} />
      <Route path="/eventos/arquivados" element={<EventosArquivado />} />
    </Routes>
  );
};

export default AdmRouter;
