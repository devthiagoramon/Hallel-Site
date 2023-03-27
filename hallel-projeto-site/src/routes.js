import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fundadora from "./pages/Fundadora";
import Pedido from "./pages/pedido-oracao";
import Associado from "./pages/Associado";
import SolicitacaoCadastro from "./pages/SolicitarCadastro";
import Doacoes from "./pages/Doacoes/Doacoes.js";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import MembrosAdm from "./pages/Administrador/Membros";
import EventosCriarAdm from "./pages/Administrador/Eventos/adicionar";
import EventoListarAdm from "./pages/Administrador/Eventos/listar";
import EventoUser from "./pages/Evento/listar";
import Perfil from "./pages/PerfilUsuario";
import MaisInfo from "./pages/Evento/MaisInformacoes";
import PainelFinanceiro from "./pages/Administrador/Financeiro";
import Renda from "./pages/Administrador/Financeiro/renda";
import Entrar from "./pages/Entrar";
import Gasto from "./pages/Administrador/Financeiro/gastos";
import PagamentosAssociado from "./pages/Administrador/Financeiro/pagamentos";
import DoacoesDinheiroAdm from "./pages/Administrador/Financeiro/doacao";

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
        <Route path="/solicitarCadastro" element={<SolicitacaoCadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/eventos" element={<EventoUser />} />
        <Route path="/administrador/membros" element={<MembrosAdm />} />
        <Route path="/administrador/eventos" element={<EventoListarAdm />} />
        <Route
          path="/administrador/eventos/criar"
          element={<EventosCriarAdm />}
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
        <Route path="/administrador/painelFinanceiro/doacoes/dinheiro" element={<DoacoesDinheiroAdm/>}/>
        <Route path="/entrar" element={<Entrar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
