import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Fundadora from "./pages/Fundadora/index.js";
import Pedido from "./pages/PedidoOracao/index.js";
import Associado from "./pages/Associado/index.js";
import VideoChamada from "./pages/VideoChamada/indexVideo.js";
import Sobre from "./pages/Sobre/index.js";
import MembrosAdm from "./pages/Administrador/Membros/index.js";
import EventosCriarAdm from "./pages/Administrador/Eventos/adicionar/index.js";
import EventoListarAdm from "./pages/Administrador/Eventos/listar/index.js";
import DescricaoEvento from "./pages/DescEvento/index.js";
import MeusCursos from "./pages/VisualizarCursos/index.js";
import EventoUser from "./pages/Evento/listar/index.js";
import Perfil from "./pages/PerfilUsuario/index.js";
import MaisInfo from "./pages/Evento/MaisInformacoes/index.js";
import Entrar from "./pages/Entrar/index.jsx";
import SaidasFinanceirasADM from "./pages/Administrador/Financeiro/gastos/index.js";
import DoacaoObjetoADM from "./pages/Administrador/Financeiro/doacao_objeto/index.js";
import AssociadosADM from "./pages/Administrador/Financeiro/associados/index.js";
import AdicionarCursoAdm from "./pages/Administrador/Curso/adicionar/index.js";
import ListarCursosADM from "./pages/Administrador/Curso/listar/index.js";
import EditarCursoAdm from "./pages/Administrador/Curso/editar/index.js";
import Historico from "./pages/Administrador/Curso/HistoricoCurso/HistoricoCurso.js";
import DesempenhoUser from "./pages/DesempenhoCurso/DesempenhoCurso.js";
import DescCurso from "./pages/DescCurso/index.js";
import CursoAtividade from "./pages/TelaAtividades/TelaAtividade.js";
import Cursos from "./pages/Cursos/index.jsx";
import AssociadosListaCursosAdm from "./pages/Administrador/Curso/associadosParticipandoCurso/index.jsx";
import Sorteio from "./pages/Sorteio/index.js";
import AdmSorteio from "./pages/Administrador/SorteioAdm/indexSorteio.js";
import LojaPrincipal from "./pages/Loja/index";
import LojaProduto from "./pages/Loja/LojaProduto/indexProduto.js";
import LojaPagamento from "./pages/Loja/LojaProduto/LojaPagamento/indexPagLoja.js";
import LocaisEventos from "./pages/Administrador/Eventos/locais_evento/AdicionarLocais.js";
import DespesaEvento from "./pages/Administrador/Eventos/despesa_evento/DespesaEvento.js";
import EditarEventoAdm from "./pages/Administrador/Eventos/editar/EditarEventoAdm.js";
import EventosArquivado from "./pages/Administrador/Eventos/listar/EventosArquivado.js";
import HistoricoAssociado from "./pages/Administrador/Financeiro/associados/HistoricoAssociado/index.js";
import FormEvento from "./pages/CadastroEvento/FormEvento.js";
import PainelFinanceiroAdm from "./pages/Administrador/Financeiro/PainelFinanceiroAdm.js";
import EntradasFinanceiroAdm from "./pages/Administrador/Financeiro/renda/index.js";
import VirarAssociado from "./pages/Associado/VirarAssociado/VirarAssociado.js";
import TabelasFinanceiro from "./pages/Administrador/Financeiro/TelaPrincipal/index.js";
import GerarPDFEntrada from "./pages/Administrador/Financeiro/pdfs/GerarPDFEntrada.js";
import GerarPDFSaida from "./pages/Administrador/Financeiro/pdfs/GerarPDFSaida.js";
import CodigosFinanceiro from "./pages/Administrador/Financeiro/codigos_financeiro/CodigoFinanceiro.js";
import PagarOutroAssociado from "./pages/Associado/PagarOutroAssociado/PagarOutroAssociado.js";
import ParticipanteEvento from "./pages/Administrador/Eventos/participantes_evento/indexParticipantes.js";
import SorteioAssocGanhou from "./pages/Sorteio/SorteioAssocGanhou/SorteioAssocGanhou.js";
import { Agenda } from "./pages/Agenda/Agenda.js";
import HeaderHallel from "./components/HeaderHallel/index.js";
import React from "react";
import Footer from "./components/Footer/index.js";
import DoacoesHallel from "./pages/DoacoesHallel/index.js";
import TipoDoacao from "./pages/DoacoesHallel/SelecioneTipoDoacao/index.js";
import PagamentoDoacao from "./pages/DoacoesHallel/PagamentoDoacao/index.js";
import Cadastro from "./pages/Cadastro/index.jsx";
import NotFound from "./pages/NotFound/index.js";
import { getRoles } from "./utils/utilLocalStorage.js";
import HomeAdm from "./pages/Administrador/HomeAdm/index.js";
import FormularioAdm from "./pages/Administrador/FormularioAdm/index.js";
import AdmRouter from "./AdmRouter.js";
import NaoUsuarioForm from "./pages/Evento/MaisInformacoes/ParticiparEvento/FormularioNaoUsuarioHallel.jsx"
import FormularioVoluntario from "./pages/Evento/Voluntario/indexMain.js";
import DoacoesEventos from "./pages/Evento/DoarEvento/index.js";
import TipoDoacaoEventos from "./pages/Evento/DoarEvento/SelecioneTipoDoacao/index.js";
import PagamentoDoacaoEventos from "./pages/DoacoesHallel/PagamentoDoacao/index.js";
import Pix from "./pages/Pagamento/Pix/Pix.js";
import Boleto from "./pages/Pagamento/Boleto/Boleto.js";
import Cartao from "./pages/Pagamento/Cartao/Cartao.js";

function RoutesApp() {
  var roles = localStorage.getItem("R0l3s");

  return (

    

    <Routes>
      <Route
        path="/"  
        element={
          <>
            <HeaderHallel />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/fundadora"
        element={
          <>
            <HeaderHallel />
            <Fundadora />
            <Footer />
          </>
        }
      />

      <Route
        path="/PagamentoPix"
        element={
          <>
            <HeaderHallel />
            <Pix />
            <Footer />
          </>
        }
      />

      <Route
        path="/PagamentoBoleto"
        element={
          <>
            <HeaderHallel />
            <Boleto />
            <Footer />
          </>
        }
      />


<Route
        path="/PagamentoCartao"
        element={
          <>
            <HeaderHallel />
            <Cartao />
            <Footer />
          </>
        }
      />

      <Route
        path="/tipoDoacaoEventos"
        element={
          <>
            <HeaderHallel />
            <TipoDoacaoEventos />
            <Footer />
          </>
        }
      />
      <Route
        path="/pagamentoDoacaoEventos"
        element={
          <>
            <HeaderHallel />
            <PagamentoDoacaoEventos />
            <Footer />
          </>
        }
      />
      <Route
        path="/pedido"
        element={
          <>
            <HeaderHallel />
            <Pedido />
            <Footer />
          </>
        }
      />

<Route
        path="/doarEvento"
        element={
          <>
            <HeaderHallel />
            <DoacoesEventos />
            <Footer />
          </>
        }
      />

      <Route
        path="/associado"
        element={
          <>
            <HeaderHallel />
            <Associado />
            <Footer />
          </>
        }
      />
      {/* <Route path="/doacoes" element={<Doacoes />} /> */}
      <Route
        path="/virarAssociado"
        element={
          <>
            <HeaderHallel />
            <VirarAssociado />
            <Footer />
          </>
        }
      />
      <Route
        path="/cadastro"
        element={
          <>
            <HeaderHallel />
            <Cadastro />
            <Footer />
          </>
        }
      />
      <Route
        path="/sobre"
        element={
          <>
            <HeaderHallel />
            <Sobre />
            <Footer />
          </>
        }
      />
      <Route
        path="/descricao"
        element={
          <>
            <HeaderHallel />
            <DescricaoEvento />
            <Footer />
          </>
        }
      />
      <Route
        path="/eventos"
        element={
          <>
            <HeaderHallel />
            <EventoUser />
            <Footer />
          </>
        }
      />
      <Route
        path="/formulario"
        element={
          <>
            <HeaderHallel />
            <NaoUsuarioForm />
            <Footer />
          </>
        }
      />
      <Route
        path="/loja"
        element={
          <>
            <HeaderHallel />
            <LojaPrincipal />
            <Footer />
          </>
        }
      />
      <Route
        path="/loja/produto"
        element={
          <>
            <HeaderHallel />
            <LojaProduto />
            <Footer />
          </>
        }
      />
      <Route
        path="/loja/pagamento"
        element={
          <>
            <HeaderHallel />
            <LojaPagamento />
            <Footer />
          </>
        }
      />
      <Route
        path="/entrar"
        element={
          <>
            <HeaderHallel />
            <Entrar />
            <Footer />
          </>
        }
      />
      <Route
        path="/pagarOutroAssociado"
        element={
          <>
            <HeaderHallel />
            <PagarOutroAssociado />
            <Footer />
          </>
        }
      />
      <Route
        path="/agenda"
        element={
          <>
            <HeaderHallel />
            <Agenda />
            <Footer />
          </>
        }
      />
      {/*localStorage.getItem("token") !== null &&
        roles.includes("ROLE_USER") ? (
        <>*/}
      <Route
        path="/perfil"
        element={
          <>
            <HeaderHallel />
            <Perfil />
            <Footer />
          </>
        }
      />
      <Route
        path="/meusCursos"
        element={
          <>
            <HeaderHallel />
            <MeusCursos />
            <Footer />
          </>
        }
      />
      <Route
        path="/desempenhoUser"
        element={
          <>
            <HeaderHallel />
            <DesempenhoUser />
            <Footer />
          </>
        }
      />
      {/*</>
        ) : (
          ""
        )}*/}
      {/*localStorage.getItem("token") !== null &&
        roles.includes("ROLE_USER") &&
        roles.includes("ROLE_ASSOCIADO") ? (
          <>*/}
      <Route
        path="/perfil"
        element={
          <>
            <HeaderHallel />
            <Perfil />
            <Footer />
          </>
        }
      />
      <Route
        path="/meusCursos"
        element={
          <>
            <HeaderHallel />
            <MeusCursos />
            <Footer />
          </>
        }
      />
      <Route
        path="/desempenhoUser"
        element={
          <>
            <HeaderHallel />
            <DesempenhoUser />
            <Footer />
          </>
        }
      />
      <Route
        path="/cursos"
        element={
          <>
            <HeaderHallel />
            <Cursos />
            <Footer />
          </>
        }
      />
      <Route
        path="/sorteioAssociado"
        element={
          <>
            <HeaderHallel />
            <Sorteio />
            <Footer />
          </>
        }
      />
      <Route
        path="/sorteioAssociado/:idAssoc/:idSorteio"
        element={
          <>
            <HeaderHallel />
            <SorteioAssocGanhou />
            <Footer />
          </>
        }
      />
      <Route
        path="/descCurso/:idCurso"
        element={
          <>
            <HeaderHallel />
            <DescCurso />
            <Footer />
          </>
        }
      />
      <Route
        path="/atividades"
        element={
          <>
            <HeaderHallel />
            <CursoAtividade />
            <Footer />
          </>
        }
      />{" "}
      <Route
        path="/doacoes"
        element={
          <>
            <HeaderHallel />
            <DoacoesHallel />
            <Footer />
          </>
        }
      />
      <Route
        path="/tipodoacao"
        element={
          <>
            <HeaderHallel />
            <TipoDoacao />
            <Footer />
          </>
        }
      />
      <Route
        path="/pagamentoDoacao"
        element={
          <>
            <HeaderHallel />
            <PagamentoDoacao />
            <Footer />
          </>
        }
      />
      {/*</>
        ) : (
          ""
        )}*/}
      {/*localStorage.getItem("token") !== null &&
        roles.includes("ROLE_ADMIN") ? (
          <>*/}

      <Route
        path="/administrador/painelFinanceiro/entradas"
        element={
          <>
            <HeaderHallel />
            <EntradasFinanceiroAdm />
            <Footer />
          </>
        }
      />
      <Route
        path="/administrador/painelFinanceiro/saidas"
        element={
          <>
            <HeaderHallel />
            <SaidasFinanceirasADM />
            <Footer />
          </>
        }
      />
      <Route
        path="/administrador/cursos/add"
        element={
          <>
            <HeaderHallel />
            <AdicionarCursoAdm />
            <Footer />
          </>
        }
      />
      {/* <Route
        path="/administrador/membros"
        element={
          <>
            <HeaderHallel />
            <MembrosAdm />
            <Footer />
          </>
        }
      /> */}
      {/* <Route
        path="/administrador/eventos"
        element={
          <>
            <HeaderHallel />
            <EventoListarAdm />
            <Footer />
          </>
        }
      /> */}
      {/* <Route
        path="/administrador/eventos/criar"
        element={
          <>
            <HeaderHallel />
            <EventosCriarAdm />
            <Footer />
          </>
        }
      /> */}
      <Route
        path="/administrador/cursos/historicoCurso"
        element={
          <>
            <HeaderHallel />
            <Historico />
            <Footer />
          </>
        }
      />
      <Route
        path="/administrador/sorteio"
        element={
          <>
            <HeaderHallel />
            <AdmSorteio />
            <Footer />
          </>
        }
      />
      <Route
        path="/administrador/associado/historicoAssociado/:idAssociado"
        element={
          <>
            <HeaderHallel />
            <HistoricoAssociado />
            <Footer />
          </>
        }
      />
      <Route
        path="/administrador/cursos"
        element={
          <>
            <HeaderHallel />
            <ListarCursosADM />
            <Footer />
          </>
        }
      />
      <Route
        path="/administrador/cursos/editar/:idCurso"
        element={
          <>
            <HeaderHallel />
            <EditarCursoAdm />
            <Footer />
          </>
        }
      />
      <Route
        path="/administrador/cursos/associados/:idCurso"
        element={
          <>
            <HeaderHallel />
            <AssociadosListaCursosAdm />
            <Footer />
          </>
        }
      />
      {/* <Route
        path="/administrador/locaisEvento"
        element={
          <>
            <HeaderHallel />
            <LocaisEventos />
            <Footer />
          </>
        }
      /> */}
      {/* <Route
        path="/administrador/eventos/:idEvento/participantes"
        element={
          <>
            <HeaderHallel />
            <ParticipanteEvento />
            <Footer />
          </>
        }
      /> */}
      {/* <Route
        path="/administrador/eventos/:idEvento/despesas"
        element={
          <>
            <HeaderHallel />
            <DespesaEvento />
            <Footer />
          </>
        }
      /> */}
      {/* <Route
        path="/administrador/eventos/:idEvento/editar"
        element={
          <>
            <HeaderHallel />
            <EditarEventoAdm />
            <Footer />
          </>
        }
      /> */}
      {/* <Route
        path="/administrador/eventos/arquivados"
        element={
          <>
            <HeaderHallel />
            <EventosArquivado />
            <Footer />
          </>
        }
      /> */}
      {/*</>
        ) : (
          ""
        )}*/}

      <Route
        path="/formVoluntario"
        element={
          <>
            <HeaderHallel />
            <FormularioVoluntario />
            <Footer />
          </>
        }
      />

      <Route
        path="/evento/maisInfo"
        element={
          <>
            <HeaderHallel />
            <MaisInfo />
            <Footer />
          </>
        }
      />
      <Route
        path="/videoChamada"
        element={
          <>
            <HeaderHallel />
            <VideoChamada />
            <Footer />
          </>
        }
      />
      <Route
        path="/CadastroEvento/FormEvento"
        element={
          <>
            <HeaderHallel />
            <FormEvento />
            <Footer />
          </>
        }
      />
      <Route path="/administrador/*" element={<AdmRouter/>}/>
      {/* Manter essa pagina por ultimo! */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesApp;
