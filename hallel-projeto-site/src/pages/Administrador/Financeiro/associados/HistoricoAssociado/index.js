
import "./styleHistoricoAssociado.css"

const Parte2 = () =>{

    const op = [ 
        'Anual',
        'Mensal',
        'Bimestral',
        'Trimestral',
        'Semestral'
    ];

    return(
        <div className="divTwo">
            <div className="infosVizuHist">
                <h3>Nome: teste</h3>
                <h3>Cpf: teste</h3>
                <h3>Idade: teste</h3>
            </div>
            <div className="filtrosVizuHist">
                <select>
                    {op.map((op)=>(
                        <option key={op}>{op}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

const HistoricoAssociado = () =>{

    return(
        <div className="main">
            <div className="topoTwo">
                <h1>Historico do associado (nome)</h1>
            </div>
            <Parte2/>
            <div className="parte3Vizu">
                <div>
                <h1>Informções de acordo com o filtro</h1>
                </div>
            </div>
        </div>          
    );
}

export default  HistoricoAssociado;