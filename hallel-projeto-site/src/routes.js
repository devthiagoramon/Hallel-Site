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
import PagamentosAssociado from "./pages/Administrador/Financeiro/pagamentos/index.js";
import DoacoesDinheiroAdm from "./pages/Administrador/Financeiro/doacao/index.js";
import DoacaoObjetoADM from "./pages/Administrador/Financeiro/doacao_objeto/index.js";
import AddDoacaoObjetoAdm from "./pages/Administrador/Financeiro/doacao_objeto/add_doacao_obj/index.js";
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



function RoutesApp() {
  var roles = localStorage.getItem("R0l3s");

  return (
    <BrowserRouter>
      <HeaderHallel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundadora" element={<Fundadora />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/associado" element={<Associado />} />
        {/* <Route path="/doacoes" element={<Doacoes />} /> */}
        <Route path="/virarAssociado" element={<VirarAssociado />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/descricao" element={<DescricaoEvento />} />
        <Route path="/eventos" element={<EventoUser />} />
        <Route path="/loja" element={<LojaPrincipal />} />
        <Route path="/loja/produto" element={<LojaProduto />} />
        <Route path="/loja/pagamento" element={<LojaPagamento />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/pagarOutroAssociado" element={<PagarOutroAssociado />} />
        <Route path="/agenda" element={<Agenda />} />
        {/*localStorage.getItem("token") !== null &&
        roles.includes("ROLE_USER") ? (
        <>*/}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/meusCursos" element={<MeusCursos />} />
        <Route path="/desempenhoUser" element={<DesempenhoUser />} />
        {/*</>
        ) : (
          ""
        )}*/}
        {/*localStorage.getItem("token") !== null &&
        roles.includes("ROLE_USER") &&
        roles.includes("ROLE_ASSOCIADO") ? (
          <>*/}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/meusCursos" element={<MeusCursos />} />
        <Route path="/desempenhoUser" element={<DesempenhoUser />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/sorteioAssociado" element={<Sorteio />} />
        <Route
          path="/sorteioAssociado/:idAssoc/:idSorteio"
          element={<SorteioAssocGanhou />}
        />
        <Route path="/descCurso/:idCurso" element={<DescCurso />} />
        <Route path="/atividades" element={<CursoAtividade />} />{" "}
        <Route path="/doacoes" element={<DoacoesHallel />} />
        <Route path="/tipodoacao" element = {<TipoDoacao/>} />
        <Route path="/pagamentoDoacao" element = {<PagamentoDoacao/>} />
        {/*</>
        ) : (
          ""
        )}*/}
        {/*localStorage.getItem("token") !== null &&
        roles.includes("ROLE_ADMIN") ? (
          <>*/}
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/sorteioAssociado" element={<Sorteio />} />
        <Route path="/descCurso/:idCurso" element={<DescCurso />} />
        <Route path="/atividades" element={<CursoAtividade />} />{" "}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/meusCursos" element={<MeusCursos />} />
        <Route path="/desempenhoUser" element={<DesempenhoUser />} />
        <Route
          path="/administrador/tabelasFinanceiro"
          element={<TabelasFinanceiro />}
        />
        <Route
          path="/administrador/financeiro/gerarPDFEntrada"
          element={<GerarPDFEntrada />}
        />
        <Route
          path="/administrador/financeiro/gerarPDFSaida"
          element={<GerarPDFSaida />}
        />
        <Route
          path="/administrador/financeiro/codigosFinanceiro"
          element={<CodigosFinanceiro />}
        />
        <Route
          path="/administrador/painelFinanceiro"
          element={<PainelFinanceiroAdm />}
        />
        <Route
          path="/administrador/painelFinanceiro/entradas"
          element={<EntradasFinanceiroAdm />}
        />
        <Route
          path="/administrador/painelFinanceiro/saidas"
          element={<SaidasFinanceirasADM />}
        />
        <Route
          path="/administrador/painelFinanceiro/pagamentosAssociado"
          element={<PagamentosAssociado />}
        />
        <Route
          path="/administrador/painelFinanceiro/associados"
          element={<AssociadosADM />}
        />
        <Route
          path="/administrador/painelFinanceiro/doacoes/dinheiro"
          element={<DoacoesDinheiroAdm />}
        />
        <Route
          path="/administrador/painelFinanceiro/doacoes/objeto"
          element={<DoacaoObjetoADM />}
        />
        <Route
          path="/administrador/painelFinanceiro/doacoes/objeto/add"
          element={<AddDoacaoObjetoAdm />}
        />
        <Route
          path="/administrador/cursos/add"
          element={<AdicionarCursoAdm />}
        />
        <Route path="/administrador/membros" element={<MembrosAdm />} />
        <Route path="/administrador/eventos" element={<EventoListarAdm />} />
        <Route
          path="/administrador/eventos/criar"
          element={<EventosCriarAdm />}
        />
        <Route
          path="/administrador/cursos/historicoCurso"
          element={<Historico />}
        />
        <Route path="/administrador/sorteio" element={<AdmSorteio />} />
        <Route
          path="/administrador/associado/historicoAssociado/:idAssociado"
          element={<HistoricoAssociado />}
        />
        <Route path="/administrador/cursos" element={<ListarCursosADM />} />
        <Route
          path="/administrador/cursos/editar/:idCurso"
          element={<EditarCursoAdm />}
        />
        <Route
          path="/administrador/cursos/associados/:idCurso"
          element={<AssociadosListaCursosAdm />}
        />
        <Route path="/administrador/locaisEvento" element={<LocaisEventos />} />
        <Route
          path="/administrador/eventos/:idEvento/participantes"
          element={<ParticipanteEvento />}
        />
        <Route
          path="/administrador/eventos/:idEvento/despesas"
          element={<DespesaEvento />}
        />
        <Route
          path="/administrador/eventos/:idEvento/editar"
          element={<EditarEventoAdm />}
        />
        <Route
          path="/administrador/eventos/arquivados"
          element={<EventosArquivado />}
        />
        {/*</>
        ) : (
          ""
        )}*/}
        <Route path="/evento/maisInfo" element={<MaisInfo />} />
        <Route path="/videoChamada" element={<VideoChamada />} />
        <Route path="/CadastroEvento/FormEvento" element={<FormEvento />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
