import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeAdm from "./pages/Administrador/HomeAdm";
import FormularioAdm from "./pages/Administrador/FormularioAdm";
import Evento from "./pages/Administrador/Eventos/listar";
import AdicionarEvento from "./pages/Administrador/Eventos/adicionar";
import EventosArquivado from "./pages/Administrador/Eventos/listar/EventosArquivado";
import EditarEventoAdm from "./pages/Administrador/Eventos/editar/EditarEventoAdm";
import LocaisEventos from "./pages/Administrador/Eventos/locais_evento/AdicionarLocais";
import ParticipantesEvento from "./pages/Administrador/Eventos/participantes_evento/indexParticipantes";
import DespesaEvento from "./pages/Administrador/Eventos/despesa_evento/DespesaEvento";

const AdmRouter = () => {
  return (
    <Routes>
      <Route path="" element={<HomeAdm />} />
      <Route path="/formulario" element={<FormularioAdm />} />
      <Route path="/eventos" element={<Evento />} />
      <Route path="/eventos/adicionar" element={<AdicionarEvento />} />
      <Route path="/eventos/arquivados" element={<EventosArquivado />} />
      <Route path="/eventos/:idEvento/editar" element={<EditarEventoAdm />} />
      <Route path="/eventos/locais" element={<LocaisEventos />} />
      <Route
        path="/eventos/:idEvento/participantes"
        element={<ParticipantesEvento />}
      />
      <Route path="/eventos/:idEvento/despesas" element={<DespesaEvento />}/>
    </Routes>
  );
};

export default AdmRouter;
