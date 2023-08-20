import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fundadora from "./pages/Fundadora";
import Pedido from "./pages/PedidoOracao";
import Associado from "./pages/Associado";
import SolicitacaoCadastro from "./pages/SolicitarCadastro";
import VideoChamada from "./pages/VideoChamada/indexVideo";
import Doacoes from "./pages/Doacoes/Doacoes.js";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import MembrosAdm from "./pages/Administrador/Membros";
import EventosCriarAdm from "./pages/Administrador/Eventos/adicionar";
import EventoListarAdm from "./pages/Administrador/Eventos/listar";
import DescricaoEvento from "./pages/DescEvento";
import MeusCursos from "./pages/VisualizarCursos";
import EventoUser from "./pages/Evento/listar";
import DoacaoFormulario from "./pages/DoacaoForm/indexForms";
import Perfil from "./pages/PerfilUsuario";
import MaisInfo from "./pages/Evento/MaisInformacoes";
import Entrar from "./pages/Entrar";
import SaidasFinanceirasADM from "./pages/Administrador/Financeiro/gastos";
import PagamentosAssociado from "./pages/Administrador/Financeiro/pagamentos";
import DoacoesDinheiroAdm from "./pages/Administrador/Financeiro/doacao";
import DoacaoObjetoADM from "./pages/Administrador/Financeiro/doacao_objeto";
import AddDoacaoObjetoAdm from "./pages/Administrador/Financeiro/doacao_objeto/add_doacao_obj";
import AssociadosADM from "./pages/Administrador/Financeiro/associados";
import AdicionarCursoAdm from "./pages/Administrador/Curso/adicionar";
import ListarCursosADM from "./pages/Administrador/Curso/listar";
import EditarCursoAdm from "./pages/Administrador/Curso/editar";
import Historico from "./pages/Administrador/Curso/HistoricoCurso/HistoricoCurso.js";
import DesempenhoUser from "./pages/DesempenhoCurso/DesempenhoCurso";
import DescCurso from "./pages/DescCurso";
import CursoAtividade from "./pages/TelaAtividades/TelaAtividade";
import Cursos from "./pages/Cursos";
import AssociadosListaCursosAdm from "./pages/Administrador/Curso/associadosParticipandoCurso";
import Sorteio from "./pages/Sorteio";
import AdmSorteio from "./pages/Administrador/SorteioAdm/indexSorteio";
import LojaPrincipal from "./pages/Loja/index";
import LojaProduto from "./pages/Loja/LojaProduto/indexProduto";
import LojaPagamento from "./pages/Loja/LojaProduto/LojaPagamento/indexPagLoja";
import LocaisEventos from "./pages/Administrador/Eventos/locais_evento/AdicionarLocais";
import DespesaEvento from "./pages/Administrador/Eventos/despesa_evento/DespesaEvento";
import EditarEventoAdm from "./pages/Administrador/Eventos/editar/EditarEventoAdm";
import EventosArquivado from "./pages/Administrador/Eventos/listar/EventosArquivado";
import HistoricoAssociado from "./pages/Administrador/Financeiro/associados/HistoricoAssociado/index.js";
import FormEvento from "./pages/CadastroEvento/FormEvento";
import PainelFinanceiroAdm from "./pages/Administrador/Financeiro/PainelFinanceiroAdm";
import EntradasFinanceiroAdm from "./pages/Administrador/Financeiro/renda";
import VirarAssociado from "./pages/Associado/VirarAssociado/VirarAssociado";
import TabelasFinanceiro from "./pages/Administrador/despesas_tables";

function RoutesApp() {

  var roles = localStorage.getItem("R0l3s");


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundadora" element={<Fundadora />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/associado" element={<Associado />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/virarAssociado" element={<VirarAssociado />} />
        <Route path="/formularioDoacao" element={<DoacaoFormulario />} />
        <Route path="/solicitarCadastro" element={<SolicitacaoCadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/descricao" element={<DescricaoEvento />} />
        <Route path="/eventos" element={<EventoUser />} />
        <Route path="/loja" element={<LojaPrincipal />} />
        <Route path="/loja/produto" element={<LojaProduto />} />
        <Route path="/loja/pagamento" element={<LojaPagamento />} />
        <Route path="/entrar" element={<Entrar />} />
        {localStorage.getItem("token") !== null &&
        roles.includes("ROLE_USER") ? (
          <>
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/meusCursos" element={<MeusCursos />} />
            <Route path="/desempenhoUser" element={<DesempenhoUser />} />
          </>
        ) : (
          ""
        )}
        {localStorage.getItem("token") !== null &&
        roles.includes("ROLE_USER") &&
        roles.includes("ROLE_ASSOCIADO") ? (
          <>
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/meusCursos" element={<MeusCursos />} />
            <Route path="/desempenhoUser" element={<DesempenhoUser />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/sorteioAssociado" element={<Sorteio />} />
            <Route path="/descCurso/:idCurso" element={<DescCurso />} />
            <Route path="/atividades" element={<CursoAtividade />} />{" "}
          </>
        ) : (
          ""
        )}

        {localStorage.getItem("token") !== null &&
        localStorage.getItem("R0l3s") ===
          "ROLE_ADMIN,ROLE_ASSOCIADO,ROLE_USER" ? (
          <>
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
            <Route
              path="/administrador/eventos"
              element={<EventoListarAdm />}
            />
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
            <Route
              path="/administrador/locaisEvento"
              element={<LocaisEventos />}
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
          </>
        ) : (
          ""
        )}

        <Route path="/evento/maisInfo" element={<MaisInfo />} />
        <Route path="/videoChamada" element={<VideoChamada />} />
        <Route path="/CadastroEvento/FormEvento" element={<FormEvento />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
