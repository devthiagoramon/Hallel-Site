import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fundadora from "./pages/Fundadora";
import Pedido from "./pages/PedidoOracao";
import Associado from "./pages/Associado";
import SolicitacaoCadastro from "./pages/SolicitarCadastro";
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
import PainelFinanceiro from "./pages/Administrador/Financeiro";
import Renda from "./pages/Administrador/Financeiro/renda";
import Entrar from "./pages/Entrar";
import Gasto from "./pages/Administrador/Financeiro/gastos";
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

function RoutesApp() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundadora" element={<Fundadora />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/associado" element={<Associado />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/formulario" element={<DoacaoFormulario />} />
        <Route path="/solicitarCadastro" element={<SolicitacaoCadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cursos" element={<Cursos/>}/>
        <Route path="/eventos" element={<EventoUser />} />
        <Route path="/descricao" element={<DescricaoEvento />} />
        <Route path="/meusCursos" element={<MeusCursos />} />
        <Route path="/descCurso/:idCurso" element={<DescCurso/>} />
        <Route path="/atividades" element= {<CursoAtividade/>} />
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
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/maisInfo" element={<MaisInfo />} />
        <Route
          path="/administrador/painelFinanceiro"
          element={<PainelFinanceiro />}
        />
        <Route
          path="/administrador/painelFinanceiro/rendas"
          element={<Renda />}
        />
        <Route
          path="/administrador/painelFinanceiro/gastos"
          element={<Gasto />}
        />
        <Route
          path="/administrador/painelFinanceiro/pagamentosAssociado"
          element={<PagamentosAssociado />}
        />
        <Route
          path="/administrador/painelFinanceiro/associados"
          element={<AssociadosADM />}
        />
        <Route path="/administrador/painelFinanceiro/doacoes/dinheiro" element={<DoacoesDinheiroAdm/>}/>
        <Route path="/administrador/painelFinanceiro/doacoes/objeto" element={<DoacaoObjetoADM/>}/>
        <Route path="/administrador/painelFinanceiro/doacoes/objeto/add" element={<AddDoacaoObjetoAdm/>}/>;
        <Route path="/administrador/cursos/add" element={<AdicionarCursoAdm/>}/>
        <Route path="/administrador/cursos" element={<ListarCursosADM/>}/>
        <Route path="/administrador/cursos/editar/:idCurso" element={<EditarCursoAdm/>}/>
        <Route path="/administrador/cursos/associados/:idCurso" element={<AssociadosListaCursosAdm/>}/>
        <Route path="/desempenhoUser"element={<DesempenhoUser />}/>
        <Route path="/entrar" element={<Entrar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;