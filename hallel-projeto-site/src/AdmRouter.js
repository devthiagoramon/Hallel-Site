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
import Financeiro from "./pages/Administrador/Financeiro/TelaPrincipal";
import PDFEntrada from "./pages/Administrador/Financeiro/pdfs/GerarPDFEntrada";
import PDFSaida from "./pages/Administrador/Financeiro/pdfs/GerarPDFSaida";
import CodigosFinanceiro from "./pages/Administrador/Financeiro/codigos_financeiro/CodigoFinanceiro";
import EntradasFinanceiro from "./pages/Administrador/Financeiro/pdfs/PDFEntrada";
import SaidasFinanceiro from "./pages/Administrador/Financeiro/pdfs/PDFSaida";
import Associados from "./pages/Administrador/Financeiro/associados/index.js";
import PagamentosAssociados from "./pages/Administrador/Financeiro/pagamentos/index.js";
import DoacoesDinheiro from "./pages/Administrador/Financeiro/doacao/index.js";
import DoacaoObjeto from "./pages/Administrador/Financeiro/doacao_objeto/index.js";
import AddDoacaoObjeto from "./pages/Administrador/Financeiro/doacao_objeto/add_doacao_obj/index.js";
import MembrosAdministrador from "./pages/Administrador/Membros/index.js";
import VerDoacoes from "./pages/Administrador/Eventos/doações/verDoacoes.js";
import ListarDoadores from "./pages/Administrador/Eventos/doações/doadores/eventoDoadores.js";

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
      <Route path="/eventos/verDoacoes" element={<VerDoacoes />} />
      <Route path="/membros" element={<MembrosAdministrador/>}/>
      <Route path="/eventos/:idEvento/verDoadores" element={<ListarDoadores />} />
      <Route
        path="/eventos/:idEvento/participantes"
        element={<ParticipantesEvento />}
      />
      <Route path="/eventos/:idEvento/despesas" element={<DespesaEvento />}/>
      <Route path="/painelfinanceiro" element={<Financeiro />} />
      <Route path="/financeiro/gerarPDFEntrada" element={<PDFEntrada />} />
      <Route path="/financeiro/gerarPDFSaida" element={<PDFSaida />} />
      <Route path="/financeiro/codigosFinanceiro" element={<CodigosFinanceiro />} />
      <Route path="/financeiro/pdfs/PDFEntrada" element={<EntradasFinanceiro />} />
      <Route path="/financeiro/pdfs/PDFSaida" element={<SaidasFinanceiro />} />
      <Route path="/financeiro/associados" element={<Associados />} />
      <Route path="/financeiro/pagamentosAssociados" element={<PagamentosAssociados />} />
      <Route path="/financeiro/doacoesDinheiro" element={<DoacoesDinheiro />} />
      <Route path="/financeiro/doacoesObjetos" element={<DoacaoObjeto />} />
      <Route path="/financeiro/addDoacoesObjetos" element={<AddDoacaoObjeto />} />
    </Routes>
  );
};

export default AdmRouter;
