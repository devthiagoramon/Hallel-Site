
import "./styleHistoricoAssociado.css";


const Parte2 = () => {
    const op = [
        'Anual',
        'Mensal',
        'Bimestral',
        'Trimestral',
        'Semestral'
    ];
    return (
        <div className="infos">
            <div className="infosAs">
                <h3>Nome: teste</h3>
                <h3>Cpf: teste</h3>
                <h3>Idade: teste</h3>
            </div>
            <div className="filtros">
                <select >
                    {op.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}



const HistoricoAssociado = () => {

    return (

        <div className="main">
            <div className="topo">
                <h2>Histórico do associado (nome)</h2>
            </div>
            <Parte2 />
            <div className="parte3">
                <div className="painelInfos">
                    <h1>Infos de acordo com o filtro</h1>
                </div>
            </div>
        </div>
    );
}

export default HistoricoAssociado;