import "./Boleto.css";
import { OutlinedButtonHallel } from "../../../components/BtnHallel";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

function Boleto() {
    return (
        <div className="master">
            <div>
                <div className="Pagamento-texto">Pagamento</div>
                
                <div className="container-infos">
                    
                <div className="alinha"><div className="circulo">
                <div><TextSnippetOutlinedIcon style={{marginLeft:45,marginTop:45, color:"#163A25", width:65, height:65}}/></div>
                </div>

                <br></br>
                    <div className="buttom">
                        <OutlinedButtonHallel
                         style={{
                            width: "100%",
                            height: "100%",
                            padding: "0.3rem",
                             fontSize: "24px",
                            }} > Gerar Boleto
                         </OutlinedButtonHallel>
                     </div>

<div style={{margin:70}}></div>

<div className="circulo">
    <div><ContentCopyOutlinedIcon style={{marginLeft:50,marginTop:50, color:"#163A25", width:60, height:60}}/></div>
</div>
<br></br>
                     <div className="buttom">
                        <OutlinedButtonHallel
                         style={{
                            width: "100%",
                            height: "100%",
                            padding: "0.3rem",
                             fontSize: "24px",
                            }} > Copiar Código do Boleto
                         </OutlinedButtonHallel>
                     </div>
</div>
                </div>
            
            </div>        
        </div>
    );
}

export default Boleto;
